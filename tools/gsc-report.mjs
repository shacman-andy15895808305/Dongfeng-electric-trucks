import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { createGscClient, googleJson, siteUrl } from "./gsc-client.mjs";

const { accessToken, clientEmail } = await createGscClient();
const encodedSite = encodeURIComponent(siteUrl);
const reportDirectory = path.resolve("reports", "gsc");

function isoDate(daysFromToday) {
  const date = new Date();
  date.setUTCDate(date.getUTCDate() + daysFromToday);
  return date.toISOString().slice(0, 10);
}

async function searchAnalytics(startDate, endDate, dimensions = []) {
  return googleJson(
    accessToken,
    `https://www.googleapis.com/webmasters/v3/sites/${encodedSite}/searchAnalytics/query`,
    {
      method: "POST",
      body: JSON.stringify({
        startDate,
        endDate,
        dimensions,
        dataState: "final",
        rowLimit: dimensions.length ? 100 : 1,
      }),
    },
  );
}

function totals(result) {
  return result.rows?.[0] || { clicks: 0, impressions: 0, ctr: 0, position: 0 };
}

function tableRows(result) {
  return (result.rows || []).map((row) => ({
    key: row.keys.join(" / "),
    clicks: row.clicks,
    impressions: row.impressions,
    ctr: row.ctr,
    position: row.position,
  }));
}

function escapeCell(value) {
  return String(value ?? "").replaceAll("|", "\\|").replaceAll("\n", " ");
}

function performanceTable(rows, limit = 20) {
  if (!rows.length) return "_No data available yet._";
  return [
    "| Item | Clicks | Impressions | CTR | Position |",
    "|---|---:|---:|---:|---:|",
    ...rows.slice(0, limit).map(
      (row) =>
        `| ${escapeCell(row.key)} | ${row.clicks} | ${row.impressions} | ${(
          row.ctr * 100
        ).toFixed(2)}% | ${row.position.toFixed(1)} |`,
    ),
  ].join("\n");
}

function delta(current, previous, field) {
  if (!previous[field]) return current[field] ? "new" : "0%";
  return `${(((current[field] - previous[field]) / previous[field]) * 100).toFixed(1)}%`;
}

const currentRange = { start: isoDate(-30), end: isoDate(-3) };
const previousRange = { start: isoDate(-58), end: isoDate(-31) };

const [
  currentRaw,
  previousRaw,
  queriesRaw,
  pagesRaw,
  countriesRaw,
  devicesRaw,
  sitemaps,
] = await Promise.all([
  searchAnalytics(currentRange.start, currentRange.end),
  searchAnalytics(previousRange.start, previousRange.end),
  searchAnalytics(currentRange.start, currentRange.end, ["query"]),
  searchAnalytics(currentRange.start, currentRange.end, ["page"]),
  searchAnalytics(currentRange.start, currentRange.end, ["country"]),
  searchAnalytics(currentRange.start, currentRange.end, ["device"]),
  googleJson(
    accessToken,
    `https://www.googleapis.com/webmasters/v3/sites/${encodedSite}/sitemaps`,
  ),
]);

const current = totals(currentRaw);
const previous = totals(previousRaw);
const queries = tableRows(queriesRaw);
const pages = tableRows(pagesRaw);
const countries = tableRows(countriesRaw);
const devices = tableRows(devicesRaw);
const opportunities = queries
  .filter((row) => row.impressions > 0 && row.position >= 8 && row.position <= 20)
  .sort((a, b) => b.impressions - a.impressions);
const lowCtr = queries
  .filter((row) => row.impressions >= 10 && row.ctr < 0.02)
  .sort((a, b) => b.impressions - a.impressions);

const sitemapXml = await readFile(path.resolve("dist", "sitemap.xml"), "utf8");
const urls = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
const inspections = [];
for (const url of urls) {
  try {
    const result = await googleJson(
      accessToken,
      "https://searchconsole.googleapis.com/v1/urlInspection/index:inspect",
      {
        method: "POST",
        body: JSON.stringify({
          inspectionUrl: url,
          siteUrl,
          languageCode: "en-US",
        }),
      },
    );
    const status = result.inspectionResult?.indexStatusResult || {};
    inspections.push({
      url,
      verdict: status.verdict || "UNKNOWN",
      coverageState: status.coverageState || "Unknown",
      lastCrawlTime: status.lastCrawlTime || "",
      googleCanonical: status.googleCanonical || "",
      userCanonical: status.userCanonical || "",
    });
  } catch (error) {
    inspections.push({ url, verdict: "ERROR", coverageState: error.message });
  }
}

const generatedAt = new Date().toISOString();
const report = {
  generatedAt,
  siteUrl,
  clientEmail,
  currentRange,
  previousRange,
  current,
  previous,
  queries,
  pages,
  countries,
  devices,
  opportunities,
  lowCtr,
  sitemaps: sitemaps.sitemap || [],
  inspections,
};

const sitemapLines = report.sitemaps.length
  ? report.sitemaps.map(
      (item) =>
        `- ${item.path}: pending=${Boolean(item.isPending)}, errors=${item.errors || 0}, warnings=${item.warnings || 0}`,
    )
  : ["- No submitted sitemap returned by the API."];
const inspectionLines = inspections.map(
  (item) =>
    `| ${escapeCell(item.url)} | ${item.verdict} | ${escapeCell(item.coverageState)} | ${escapeCell(
      item.lastCrawlTime,
    )} |`,
);

const markdown = [
  "# Dongfeng GSC Report",
  "",
  `Generated: ${generatedAt}`,
  `Property: ${siteUrl}`,
  "",
  "## 28-day comparison",
  "",
  "| Metric | Current | Previous | Change |",
  "|---|---:|---:|---:|",
  `| Clicks | ${current.clicks} | ${previous.clicks} | ${delta(current, previous, "clicks")} |`,
  `| Impressions | ${current.impressions} | ${previous.impressions} | ${delta(
    current,
    previous,
    "impressions",
  )} |`,
  `| CTR | ${(current.ctr * 100).toFixed(2)}% | ${(previous.ctr * 100).toFixed(2)}% | - |`,
  `| Average position | ${current.position.toFixed(1)} | ${previous.position.toFixed(1)} | - |`,
  "",
  "## Top queries",
  "",
  performanceTable(queries),
  "",
  "## Top pages",
  "",
  performanceTable(pages),
  "",
  "## Countries",
  "",
  performanceTable(countries, 10),
  "",
  "## Devices",
  "",
  performanceTable(devices, 10),
  "",
  "## Ranking opportunities (positions 8-20)",
  "",
  performanceTable(opportunities),
  "",
  "## High-impression, low-CTR queries",
  "",
  performanceTable(lowCtr),
  "",
  "## Sitemaps",
  "",
  ...sitemapLines,
  "",
  "## URL index status",
  "",
  "| URL | Verdict | Coverage | Last crawl |",
  "|---|---|---|---|",
  ...inspectionLines,
  "",
].join("\n");

await mkdir(reportDirectory, { recursive: true });
const dateStamp = generatedAt.slice(0, 10);
const jsonPath = path.join(reportDirectory, `${dateStamp}.json`);
const markdownPath = path.join(reportDirectory, `${dateStamp}.md`);
await Promise.all([
  writeFile(jsonPath, JSON.stringify(report, null, 2), "utf8"),
  writeFile(markdownPath, markdown, "utf8"),
]);

console.log(`GSC report generated: ${markdownPath}`);
console.log(`Clicks: ${current.clicks}; impressions: ${current.impressions}`);
console.log(`Sitemap URLs checked: ${inspections.length}`);
console.log(
  `Indexed PASS: ${inspections.filter((item) => item.verdict === "PASS").length}; issues: ${inspections.filter(
    (item) => item.verdict !== "PASS",
  ).length}`,
);

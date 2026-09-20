import { createGscClient, googleJson, siteUrl } from "./gsc-client.mjs";

const { accessToken, clientEmail } = await createGscClient();
const data = await googleJson(accessToken, "https://www.googleapis.com/webmasters/v3/sites");
const property = data.siteEntry?.find((entry) => entry.siteUrl === siteUrl);

console.log(`Service account: ${clientEmail}`);
console.log(`Target property: ${siteUrl}`);
console.log(`Access: ${property?.permissionLevel || "not granted"}`);

if (!property) {
  process.exitCode = 2;
}

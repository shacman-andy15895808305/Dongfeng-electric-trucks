import { createSign } from "node:crypto";
import { readFile, readdir } from "node:fs/promises";
import { homedir } from "node:os";
import path from "node:path";

export const siteUrl = process.env.GSC_SITE_URL || "https://dongfeng-evtruck.com/";

function base64Url(value) {
  return Buffer.from(value).toString("base64url");
}

async function findCredentials() {
  if (process.env.GSC_CREDENTIALS) return process.env.GSC_CREDENTIALS;

  const keyDirectory = path.join(homedir(), "Documents", "Dongfeng-GSC");
  const files = (await readdir(keyDirectory)).filter((file) => file.endsWith(".json"));
  if (files.length !== 1) {
    throw new Error(`Expected one JSON key in ${keyDirectory}, found ${files.length}.`);
  }
  return path.join(keyDirectory, files[0]);
}

async function getAccessToken(credentials) {
  const now = Math.floor(Date.now() / 1000);
  const header = base64Url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const payload = base64Url(
    JSON.stringify({
      iss: credentials.client_email,
      scope: "https://www.googleapis.com/auth/webmasters.readonly",
      aud: "https://oauth2.googleapis.com/token",
      iat: now,
      exp: now + 3600,
    }),
  );
  const unsignedToken = `${header}.${payload}`;
  const signer = createSign("RSA-SHA256");
  signer.update(unsignedToken);
  signer.end();
  const signature = signer.sign(credentials.private_key, "base64url");

  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: `${unsignedToken}.${signature}`,
    }),
  });
  if (!response.ok) throw new Error(`Google authentication failed: ${response.status}`);
  return (await response.json()).access_token;
}

export async function createGscClient() {
  const credentialsPath = await findCredentials();
  const credentials = JSON.parse(await readFile(credentialsPath, "utf8"));
  return {
    accessToken: await getAccessToken(credentials),
    clientEmail: credentials.client_email,
  };
}

export async function googleJson(accessToken, url, options = {}) {
  const response = await fetch(url, {
    ...options,
    headers: {
      authorization: `Bearer ${accessToken}`,
      ...(options.body ? { "content-type": "application/json" } : {}),
      ...options.headers,
    },
  });
  if (!response.ok) {
    throw new Error(`Google API failed: ${response.status} ${await response.text()}`);
  }
  return response.json();
}

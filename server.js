const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const host = process.env.HOST || "127.0.0.1";
const port = Number(process.env.PORT || 3000);
const publicDirectory = path.join(__dirname, "dist");

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".xml": "application/xml; charset=utf-8"
};

function resolveRequestPath(requestUrl) {
  const pathname = decodeURIComponent(new URL(requestUrl, `http://${host}`).pathname);
  const relativePath = pathname === "/" ? "index.html" : pathname.replace(/^\/+/, "");
  const resolvedPath = path.resolve(publicDirectory, relativePath);

  if (resolvedPath !== publicDirectory && !resolvedPath.startsWith(`${publicDirectory}${path.sep}`)) {
    return null;
  }

  return resolvedPath;
}

const server = http.createServer((request, response) => {
  if (request.method !== "GET" && request.method !== "HEAD") {
    response.writeHead(405, { Allow: "GET, HEAD" });
    response.end("Method Not Allowed");
    return;
  }

  const filePath = resolveRequestPath(request.url || "/");
  if (!filePath) {
    response.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Forbidden");
    return;
  }

  fs.stat(filePath, (statError, stats) => {
    const finalPath = !statError && stats.isDirectory() ? path.join(filePath, "index.html") : filePath;

    fs.readFile(finalPath, (readError, content) => {
      if (readError) {
        response.writeHead(readError.code === "ENOENT" ? 404 : 500, {
          "Content-Type": "text/plain; charset=utf-8"
        });
        response.end(readError.code === "ENOENT" ? "Not Found" : "Internal Server Error");
        return;
      }

      response.writeHead(200, {
        "Content-Type": contentTypes[path.extname(finalPath).toLowerCase()] || "application/octet-stream",
        "Cache-Control": "no-cache"
      });
      response.end(request.method === "HEAD" ? undefined : content);
    });
  });
});

server.listen(port, host, () => {
  console.log(`Dongfeng Electric Trucks is running at http://${host}:${port}`);
});

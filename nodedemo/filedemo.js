import http from "http";
import fs from "fs";
import url from "url";
import path from "path";

const PORT = process.env.PORT || 8000;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = pah.dirname(__filename);

const server = http.createServer((req, res) => {});

server.listen(PORT, () => {
  console.log(`server is listining on port ${PORT}`);
});

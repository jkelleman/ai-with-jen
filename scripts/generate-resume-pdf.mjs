import { mkdir } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";
import { chromium } from "playwright";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const rootDirectory = path.resolve(scriptDirectory, "..");
const sourcePath = path.join(rootDirectory, "resume", "jen-kelleman-resume.html");
const outputPath = path.join(rootDirectory, "static", "files", "jen-kelleman-resume.pdf");

await mkdir(path.dirname(outputPath), { recursive: true });

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 816, height: 1056 } });

try {
  await page.goto(pathToFileURL(sourcePath).href, { waitUntil: "load" });
  await page.emulateMedia({ media: "print" });
  await page.pdf({
    path: outputPath,
    format: "Letter",
    printBackground: true,
    preferCSSPageSize: true,
    tagged: true,
    outline: true
  });
  console.log(`Generated ${path.relative(rootDirectory, outputPath)}`);
} finally {
  await browser.close();
}

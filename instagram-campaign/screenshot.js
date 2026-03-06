const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

const dir = __dirname;
const files = fs.readdirSync(dir).filter(f => f.endsWith(".html")).sort();

(async () => {
  let puppeteer;
  try { puppeteer = require("puppeteer"); } catch(e) {
    console.log("Installing puppeteer...");
    execSync("npm install puppeteer --no-save", { cwd: path.join(dir, ".."), stdio: "inherit" });
    puppeteer = require(path.join(dir, "../node_modules/puppeteer"));
  }

  const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1080, height: 1080, deviceScaleFactor: 1 });

  for (const file of files) {
    const filepath = path.join(dir, file);
    const outfile = filepath.replace(".html", ".png");
    await page.goto(`file://${filepath}`);
    await new Promise(r => setTimeout(r, 300));
    await page.screenshot({ path: outfile, fullPage: false });
    console.log(`✓ ${file} → ${path.basename(outfile)}`);
  }

  await browser.close();
  console.log("\nAll done!");
})();

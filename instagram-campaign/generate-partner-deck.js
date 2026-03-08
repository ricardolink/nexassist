const puppeteer = require('puppeteer');
const path = require('path');
const sleep = (ms) => new Promise(r => setTimeout(r, ms));

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();

  // Set viewport to match slide dimensions exactly
  await page.setViewport({ width: 1122, height: 794, deviceScaleFactor: 1 });

  const htmlPath = 'file://' + path.resolve(__dirname, 'partner-deck.html');
  await page.goto(htmlPath, { waitUntil: 'networkidle0' });
  await sleep(3000); // wait for fonts + images

  // Export as PDF — landscape letter-ish (1122x794pt = ~15.58" x 11.03" but use px)
  await page.pdf({
    path: path.resolve(__dirname, 'NexAssist-Partner-Deck.pdf'),
    width: '1122px',
    height: '794px',
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });

  await browser.close();
  console.log('✅ NexAssist-Partner-Deck.pdf generated');
})();

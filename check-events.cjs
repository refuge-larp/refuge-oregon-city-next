// Run with Playwright installed: node check-events.cjs [preview URL]
const { chromium } = require('playwright');
(async () => {
 const browser = await chromium.launch();
 try {
  for (const width of [320, 390, 1440]) {
   const page = await browser.newPage({ viewport: { width, height: 1000 } });
   await page.goto(process.argv[2] || 'http://127.0.0.1:8794/');
   const rows = await page.locator('.event-row').evaluateAll(elements => elements.map(row => ({
    width: row.clientWidth,
    content: row.querySelector('.event-copy').clientWidth,
    date: !!row.querySelector('.event-date')
   })));
   if (rows.length !== 4 || rows.some(row => !row.date || row.content < row.width / 2)) throw Error(JSON.stringify({ width, rows }));
   console.log(`PASS event columns at ${width}px`);
   await page.close();
  }
 } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exit(1); });

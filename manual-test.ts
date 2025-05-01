import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  console.log('Navegando...');
  await page.goto('https://www.saucedemo.com/', { waitUntil: 'load' });
  await page.waitForTimeout(5000);

  await browser.close();
})();

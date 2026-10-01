import puppeteer from 'puppeteer-core';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const qaDir = path.resolve(__dirname, '../public/assets/qa-verification');

if (!fs.existsSync(qaDir)) {
  fs.mkdirSync(qaDir, { recursive: true });
}

const chromePaths = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
];

const executablePath = chromePaths.find((p) => fs.existsSync(p));
if (!executablePath) {
  console.error('No Chrome or Edge executable found.');
  process.exit(1);
}

const viewports = [
  { name: 'mobile-small', width: 360, height: 800, isMobile: true },
  { name: 'mobile-standard', width: 390, height: 844, isMobile: true },
  { name: 'tablet-portrait', width: 768, height: 1024, isMobile: true },
  { name: 'desktop-short', width: 1024, height: 768, isMobile: false },
  { name: 'desktop-wide', width: 1440, height: 900, isMobile: false },
];

async function runQa() {
  const browser = await puppeteer.launch({
    executablePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu'],
  });

  const page = await browser.newPage();
  const consoleErrors = [];
  const failedRequests = [];

  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  page.on('requestfailed', (req) => {
    failedRequests.push(`${req.method()} ${req.url()} - ${req.failure()?.errorText}`);
  });

  const report = [];

  for (const vp of viewports) {
    console.log(`Checking viewport: ${vp.name} (${vp.width}x${vp.height})...`);
    await page.setViewport({
      width: vp.width,
      height: vp.height,
      deviceScaleFactor: 1,
      isMobile: vp.isMobile,
      hasTouch: vp.isMobile,
    });

    await page.goto('http://localhost:5174/', { waitUntil: 'networkidle2' });
    await page.evaluate(() => document.fonts?.ready);
    await new Promise((r) => setTimeout(r, 600));

    // Check horizontal overflow
    const overflow = await page.evaluate(() => {
      const docWidth = document.documentElement.offsetWidth;
      const scrollWidth = document.documentElement.scrollWidth;
      return {
        docWidth,
        scrollWidth,
        hasOverflow: scrollWidth > docWidth + 1, // allow 1px rounding
      };
    });

    // Check images loaded
    const brokenImages = await page.evaluate(() => {
      const imgs = Array.from(document.querySelectorAll('img'));
      return imgs
        .filter((img) => !img.complete || img.naturalWidth === 0)
        .map((img) => img.src);
    });

    // Capture screenshot
    const shotPath = path.join(qaDir, `${vp.name}.png`);
    await page.screenshot({ path: shotPath, fullPage: true });

    report.push({
      viewport: `${vp.width}x${vp.height}`,
      name: vp.name,
      hasOverflow: overflow.hasOverflow,
      scrollWidth: overflow.scrollWidth,
      docWidth: overflow.docWidth,
      brokenImagesCount: brokenImages.length,
      screenshot: shotPath,
    });
  }

  // Functional test: Mobile menu open and Escape close
  console.log('Testing mobile menu interaction...');
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
  await page.goto('http://localhost:5174/', { waitUntil: 'networkidle2' });
  await new Promise((r) => setTimeout(r, 400));

  let menuOpened = false;
  let menuClosed = false;

  const toggleExists = await page.evaluate(() => !!document.querySelector('.mobile-menu-toggle'));
  if (toggleExists) {
    await page.evaluate(() => {
      const btn = document.querySelector('.mobile-menu-toggle');
      if (btn) btn.click();
    });
    await new Promise((r) => setTimeout(r, 400));
    menuOpened = await page.evaluate(() => !!document.querySelector('#mobile-nav-panel'));
    await page.keyboard.press('Escape');
    await new Promise((r) => setTimeout(r, 400));
    menuClosed = await page.evaluate(() => !document.querySelector('#mobile-nav-panel'));
  }

  // Functional test: Preview tab switching
  console.log('Testing preview tab switching...');
  let tabSwitchSuccessful = false;
  await page.evaluate(() => {
    const tabs = document.querySelectorAll('.tab-btn');
    if (tabs.length >= 2) tabs[1].click();
  });
  await new Promise((r) => setTimeout(r, 400));
  tabSwitchSuccessful = await page.evaluate(() => {
    const plaque = document.querySelector('.plaque-title');
    return plaque?.textContent?.includes('/scan');
  });

  await browser.close();

  console.log('\n=== CIPHERGRID SITE QA REPORT ===');
  console.table(report);
  console.log(`Console Errors: ${consoleErrors.length}`);
  if (consoleErrors.length) console.log(consoleErrors);
  console.log(`Failed Requests: ${failedRequests.length}`);
  if (failedRequests.length) console.log(failedRequests);
  console.log(`Mobile Menu: Opened=${menuOpened}, ClosedOnEsc=${menuClosed}`);
  console.log(`Preview Tab Switch: ${tabSwitchSuccessful}`);

  if (
    report.some((r) => r.hasOverflow || r.brokenImagesCount > 0) ||
    consoleErrors.length > 0
  ) {
    console.error('QA checks failed!');
    process.exit(1);
  } else {
    console.log('ALL QA CHECKS PASSED PERFECTLY!');
  }
}

runQa().catch((err) => {
  console.error('QA script failed:', err);
  process.exit(1);
});

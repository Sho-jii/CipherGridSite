import puppeteer from 'puppeteer-core';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputDir = path.resolve(__dirname, '../public/assets/screenshots');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
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

console.log(`Using browser: ${executablePath}`);

async function capture() {
  const browser = await puppeteer.launch({
    executablePath,
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu',
      '--font-render-hinting=none',
    ],
  });

  const page = await browser.newPage();

  // Set standard mobile emulation: 390 x 844, DPR 2
  await page.setViewport({
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
  });

  // Navigate to root to set onboarding flag
  console.log('Setting onboarding completion...');
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle2' });
  await page.evaluate(() => {
    localStorage.setItem('cg-onboarding', '1');
    localStorage.setItem('cg-theme', 'light');
  });

  const manifest = [];
  const captureDate = new Date().toISOString();

  // 1. Home Screen
  console.log('Capturing Home screen...');
  await page.goto('http://localhost:5173/home', { waitUntil: 'networkidle2' });
  await page.evaluate(() => document.fonts?.ready);
  await new Promise((r) => setTimeout(r, 1200));
  const homePath = path.join(outputDir, 'home.png');
  await page.screenshot({ path: homePath, fullPage: false });
  manifest.push({
    id: 'home',
    filename: 'home.png',
    route: '/home',
    viewport: '390x844',
    dpr: 2,
    browser: 'Chrome/Edge Headless',
    captureDate,
    sampleState: 'Dashboard with quick actions, recent ciphers, and batch status',
    origin: 'web-emulated mobile viewport at 390x844 DPR 2',
    caption: 'CipherGrid dashboard showing primary cipher actions, recent transformations, and workspace shortcuts.',
  });

  // 2. Workspace Screen (Caesar encryption)
  console.log('Capturing Workspace screen...');
  await page.goto('http://localhost:5173/workspace', { waitUntil: 'networkidle2' });
  await page.evaluate(() => document.fonts?.ready);
  await new Promise((r) => setTimeout(r, 800));

  // Enter sample input
  try {
    const inputSelector = 'textarea, .terminal-input, input[type="text"]';
    await page.waitForSelector(inputSelector, { timeout: 3000 });
    await page.click(inputSelector);
    // Clear and type
    await page.evaluate((sel) => {
      const el = document.querySelector(sel);
      if (el) {
        el.value = 'MEET AT THE GRID';
        el.dispatchEvent(new Event('input', { bubbles: true }));
        el.dispatchEvent(new Event('change', { bubbles: true }));
      }
    }, inputSelector);
    await new Promise((r) => setTimeout(r, 500));

    // Click Process or Encrypt button if available
    const buttonSelector = 'button.button--primary, button:has-text("Process"), button:has-text("Encrypt")';
    await page.evaluate(() => {
      const btn = Array.from(document.querySelectorAll('button')).find(
        (b) => b.textContent?.includes('Process') || b.textContent?.includes('Encrypt')
      );
      if (btn) btn.click();
    });
    await new Promise((r) => setTimeout(r, 600));
  } catch (err) {
    console.warn('Workspace interaction note:', err.message);
  }

  const workspacePath = path.join(outputDir, 'workspace.png');
  await page.screenshot({ path: workspacePath, fullPage: false });
  manifest.push({
    id: 'workspace',
    filename: 'workspace.png',
    route: '/workspace',
    viewport: '390x844',
    dpr: 2,
    browser: 'Chrome/Edge Headless',
    captureDate,
    sampleState: 'Caesar cipher shift 3 with sample input "MEET AT THE GRID"',
    origin: 'web-emulated mobile viewport at 390x844 DPR 2',
    caption: 'Workspace executing Caesar shift 3 on sample input with live validation, metrics, and character breakdown.',
  });

  // 3. Scan Screen (OCR)
  console.log('Capturing Scan screen...');
  await page.goto('http://localhost:5173/scan', { waitUntil: 'networkidle2' });
  await page.evaluate(() => document.fonts?.ready);
  await new Promise((r) => setTimeout(r, 1000));
  const scanPath = path.join(outputDir, 'scan.png');
  await page.screenshot({ path: scanPath, fullPage: false });
  manifest.push({
    id: 'scan',
    filename: 'scan.png',
    route: '/scan',
    viewport: '390x844',
    dpr: 2,
    browser: 'Chrome/Edge Headless',
    captureDate,
    sampleState: 'Camera / image upload interface with offline OCR recognition mode',
    origin: 'web-emulated mobile viewport at 390x844 DPR 2',
    caption: 'Optical scanner interface for capturing printed ciphertext, cropping, and running on-device recognition.',
  });

  // 4. Analyze Screen (Cryptanalysis)
  console.log('Capturing Analyze screen...');
  await page.goto('http://localhost:5173/analyze', { waitUntil: 'networkidle2' });
  await page.evaluate(() => document.fonts?.ready);
  await new Promise((r) => setTimeout(r, 800));

  try {
    const inputSelector = 'textarea, .terminal-input';
    await page.evaluate((sel) => {
      const el = document.querySelector(sel);
      if (el) {
        el.value = 'PHHW DW WKH JULG DQG GHFRGH WKH PHVVDJH';
        el.dispatchEvent(new Event('input', { bubbles: true }));
        el.dispatchEvent(new Event('change', { bubbles: true }));
      }
    }, inputSelector);
    await new Promise((r) => setTimeout(r, 500));
    // Click analyze button if exists
    await page.evaluate(() => {
      const btn = Array.from(document.querySelectorAll('button')).find(
        (b) => b.textContent?.includes('Analyze') || b.textContent?.includes('Calculate')
      );
      if (btn) btn.click();
    });
    await new Promise((r) => setTimeout(r, 800));
  } catch (err) {
    console.warn('Analyze interaction note:', err.message);
  }

  const analyzePath = path.join(outputDir, 'analyze.png');
  await page.screenshot({ path: analyzePath, fullPage: false });
  manifest.push({
    id: 'analyze',
    filename: 'analyze.png',
    route: '/analyze',
    viewport: '390x844',
    dpr: 2,
    browser: 'Chrome/Edge Headless',
    captureDate,
    sampleState: 'Frequency analysis, Index of Coincidence, and Caesar brute-force ranking',
    origin: 'web-emulated mobile viewport at 390x844 DPR 2',
    caption: 'Cryptanalysis workbench calculating letter frequencies, n-grams, and ranked candidate solutions.',
  });

  // 5. Batch / Recipes Screen
  console.log('Capturing Batch screen...');
  await page.goto('http://localhost:5173/batch', { waitUntil: 'networkidle2' });
  await page.evaluate(() => document.fonts?.ready);
  await new Promise((r) => setTimeout(r, 1000));
  const batchPath = path.join(outputDir, 'batch.png');
  await page.screenshot({ path: batchPath, fullPage: false });
  manifest.push({
    id: 'batch',
    filename: 'batch.png',
    route: '/batch',
    viewport: '390x844',
    dpr: 2,
    browser: 'Chrome/Edge Headless',
    captureDate,
    sampleState: 'CSV / TXT multi-row batch transformation engine with column mapping',
    origin: 'web-emulated mobile viewport at 390x844 DPR 2',
    caption: 'Batch file processing interface for importing structured CSV/TXT lists, mapping parameters, and running transformations.',
  });

  await browser.close();

  // Write screenshots-manifest.json
  const manifestPath = path.join(outputDir, 'screenshots-manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf-8');
  console.log(`Screenshots and manifest successfully generated in: ${outputDir}`);
}

capture().catch((err) => {
  console.error('Capture failed:', err);
  process.exit(1);
});

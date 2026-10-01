import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const screenshotsDir = path.resolve(__dirname, '../../public/assets/screenshots');
const manifestPath = path.join(screenshotsDir, 'screenshots-manifest.json');

describe('Screenshots & Assets Manifest', () => {
  it('has a valid screenshots-manifest.json', () => {
    expect(fs.existsSync(manifestPath)).toBe(true);
    const raw = fs.readFileSync(manifestPath, 'utf-8');
    const manifest = JSON.parse(raw);
    expect(Array.isArray(manifest)).toBe(true);
    expect(manifest.length).toBe(5);

    const requiredIds = ['home', 'workspace', 'scan', 'analyze', 'batch'];
    const ids = manifest.map((item: { id: string }) => item.id);
    expect(ids).toEqual(expect.arrayContaining(requiredIds));
  });

  it('ensures each screenshot file exists and has valid dimensions and metadata', () => {
    const raw = fs.readFileSync(manifestPath, 'utf-8');
    const manifest = JSON.parse(raw);

    for (const item of manifest) {
      const filePath = path.join(screenshotsDir, item.filename);
      expect(fs.existsSync(filePath)).toBe(true);
      const stats = fs.statSync(filePath);
      expect(stats.size).toBeGreaterThan(10000); // At least 10KB
      expect(item.viewport).toBe('390x844');
      expect(item.dpr).toBe(2);
      expect(item.origin).toContain('web-emulated mobile viewport');
      expect(item.route).toMatch(/^\/[a-z]+/);
      expect(item.caption).toBeDefined();
    }
  });

  it('verifies presence of authentic logo assets', () => {
    const assetsDir = path.resolve(__dirname, '../../public/assets');
    expect(fs.existsSync(path.join(assetsDir, 'ciphergrid-logo.png'))).toBe(true);
    expect(fs.existsSync(path.join(assetsDir, 'ciphergrid-app-icon.png'))).toBe(true);
  });
});

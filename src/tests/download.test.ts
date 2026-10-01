import { describe, it, expect } from 'vitest';
import { downloadConfig } from '../config/download';

describe('Download Configuration & Release Verification', () => {
  it('defines valid release metadata', () => {
    expect(downloadConfig.appTitle).toBe('CipherGrid');
    expect(downloadConfig.version).toMatch(/^\d+\.\d+\.\d+$/);
    expect(downloadConfig.filename).toBe('CipherGrid-v1.0.0.apk');
    expect(downloadConfig.minApi).toBe(24);
  });

  it('points direct APK download to official GitHub Release asset', () => {
    expect(downloadConfig.directApkUrl).toMatch(
      /^https:\/\/github\.com\/Sho-jii\/CipherGrid\/releases\/download\/[^/]+\/CipherGrid-v1\.0\.0\.apk$/
    );
    expect(downloadConfig.releaseType).toBe('release-apk');
    expect(downloadConfig.fileSizeBytes).toBe('53.5 MB');
  });

  it('validates verified SHA-256 checksum format', () => {
    expect(downloadConfig.checksumSha256).toMatch(/^[a-f0-9]{64}$/i);
  });

  it('provides accessible repository and CI links', () => {
    expect(downloadConfig.repoUrl).toBe('https://github.com/Sho-jii/CipherGrid');
    expect(downloadConfig.actionsArtifactUrl).toContain('/actions');
    expect(downloadConfig.releasesUrl).toContain('/releases/tag/');
  });
});

<template>
  <footer class="site-footer" role="contentinfo">
    <div class="container footer-container">
      <!-- Main Footer Row -->
      <div class="footer-top-row">
        <!-- Brand Lockup -->
        <div class="footer-brand">
          <div class="brand-lockup">
            <div class="logo-tile" aria-hidden="true">
              <img src="/assets/ciphergrid-logo.png" alt="" class="logo-img" />
            </div>
            <div class="brand-text">
              <span class="brand-name">CipherGrid</span>
              <span class="brand-sub">CRYPTOGRAPHIC FIELD TERMINAL</span>
            </div>
          </div>
          <p class="footer-tagline">
            Offline-first educational mobile application for classical ciphers, on-device OCR, and cryptanalysis.
          </p>
        </div>

        <!-- Navigation Columns -->
        <div class="footer-nav-groups">
          <div class="footer-col">
            <span class="mono-label col-title">SECTIONS</span>
            <ul class="col-links">
              <li><a href="#preview">01 Preview</a></li>
              <li><a href="#features">02 Features</a></li>
              <li><a href="#install">03 Installation</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <span class="mono-label col-title">REPOSITORY</span>
            <ul class="col-links">
              <li>
                <a
                  :href="downloadConfig.repoUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Source
                </a>
              </li>
              <li>
                <a
                  :href="downloadConfig.actionsArtifactUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CI Build Pipeline
                </a>
              </li>
              <li>
                <a
                  :href="downloadConfig.releasesUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Release Tags
                </a>
              </li>
            </ul>
          </div>

          <div class="footer-col">
            <span class="mono-label col-title">TECHNICAL SPECS</span>
            <ul class="col-links">
              <li><span class="spec-label">Stack:</span> Vue 3 · Ionic · Capacitor</li>
              <li><span class="spec-label">Android:</span> SDK 36 (Min API 24)</li>
              <li><span class="spec-label">OCR:</span> Google ML Kit (Offline)</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Educational Notice Rule -->
      <div class="footer-notice">
        <p class="mono-label">
          NOTICE: Classical ciphers are educational and not secure for real secrets. Base64, Hexadecimal, and Binary are representations, not encryption. SHA-256 is a one-way digest and cannot be decrypted.
        </p>
      </div>

      <!-- Copyright & Developer Credit -->
      <div class="footer-bottom-row">
        <div class="footer-copyright">
          <span>© {{ currentYear }} CipherGrid. Open source software.</span>
          <span class="footer-divider" aria-hidden="true">·</span>
          <span class="footer-credit">
            Developed with ❤️ by
            <a
              href="https://github.com/Sho-jii"
              target="_blank"
              rel="noopener noreferrer"
              class="author-link"
            >
              @Sho-jii
            </a>
          </span>
        </div>
        <div class="footer-privacy-badge mono-label">
          ZERO TRACKERS · NO COOKIES · OFFLINE FIRST
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { downloadConfig } from '@/config/download';

const currentYear = new Date().getFullYear();
</script>

<style scoped>
.site-footer {
  background-color: var(--cg-surface);
  border-top: 1px solid var(--cg-line);
  padding: 64px 0 32px;
}

.footer-container {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.footer-top-row {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

@media (min-width: 900px) {
  .footer-top-row {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
}

.footer-brand {
  max-width: 380px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.brand-lockup {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-tile {
  width: 36px;
  height: 36px;
  background-color: var(--cg-logo-plaque);
  border: 1px solid var(--cg-logo-border);
  box-shadow: 2px 2px 0 var(--cg-primary);
  display: grid;
  place-items: center;
  padding: 3px;
  border-radius: var(--cg-radius);
}

.logo-img {
  width: 26px;
  height: 26px;
  object-fit: contain;
}

.brand-text {
  display: flex;
  flex-direction: column;
}

.brand-name {
  font-size: 18px;
  font-weight: 800;
  line-height: 1;
  color: var(--cg-ink);
}

.brand-sub {
  font-family: var(--cg-mono);
  font-size: 9px;
  font-weight: 700;
  color: var(--cg-muted);
  letter-spacing: 0.12em;
  margin-top: 2px;
}

.footer-tagline {
  font-size: 14px;
  line-height: 1.5;
  color: var(--cg-muted);
}

.footer-nav-groups {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
}

@media (min-width: 900px) {
  .footer-nav-groups {
    gap: 56px;
  }
}

.footer-col {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.col-title {
  color: var(--cg-primary);
  font-size: 11px;
}

.col-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.col-links a {
  text-decoration: none;
  font-size: 14px;
  color: var(--cg-muted);
  transition: color 180ms ease;
}

.col-links a:hover {
  color: var(--cg-ink);
  text-decoration: underline;
}

.spec-label {
  color: var(--cg-muted);
  font-family: var(--cg-mono);
  font-size: 12px;
}

.footer-notice {
  padding: 16px 20px;
  background-color: var(--cg-surface-2);
  border: 1px solid var(--cg-line);
  border-radius: var(--cg-radius);
}

.footer-notice p {
  font-size: 11px;
  line-height: 1.55;
  color: var(--cg-muted);
}

.footer-bottom-row {
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 16px;
  border-top: 1px solid var(--cg-line);
}

@media (min-width: 640px) {
  .footer-bottom-row {
    flex-direction: row;
    align-items: center;
  }
}

.footer-copyright {
  font-size: 13px;
  color: var(--cg-muted);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
}

.footer-divider {
  color: var(--cg-line);
}

.footer-credit {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.author-link {
  color: var(--cg-ink);
  font-family: var(--cg-mono);
  font-weight: 700;
  text-decoration: none;
  border-bottom: 1px dotted var(--cg-muted);
  transition: color 150ms ease, border-color 150ms ease;
}

.author-link:hover {
  color: var(--cg-primary);
  border-bottom: 1px solid var(--cg-primary);
}

.footer-privacy-badge {
  font-size: 11px;
  color: var(--cg-ink);
  background-color: var(--cg-canvas);
  padding: 4px 8px;
  border: 1px solid var(--cg-line);
}
</style>

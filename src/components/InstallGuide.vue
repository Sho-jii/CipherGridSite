<template>
  <section id="install" class="install-section" aria-labelledby="install-heading">
    <div class="container">
      <!-- Section Intro -->
      <div class="install-intro">
        <span class="mono-label section-tag">03 / INSTALLATION</span>
        <h2 id="install-heading" class="section-title">Four steps. One new workbench.</h2>
        <p class="lead-text">
          CipherGrid is distributed independently directly to users, free of store tracking and commercial advertising. Follow these steps to install the Android APK safely.
        </p>
      </div>

      <!-- Orange Safety Notice Band -->
      <div class="safety-band" role="region" aria-label="Sideloading Safety Information">
        <div class="band-tag mono-label">SECURITY & INTEGRITY NOTICE</div>
        <p class="band-text">
          Because CipherGrid is independently distributed outside Google Play, Android will prompt you before installation. We recommend keeping <strong>Google Play Protect enabled</strong>. Open-source distribution means the code is fully inspectable, not automatically exempt from OS security policies.
        </p>
      </div>

      <!-- 4 Connected Numbered Step Cards -->
      <div class="install-steps-grid">
        <!-- Step 1 -->
        <div class="step-card">
          <div class="step-num-badge mono-label">STEP 01</div>
          <h3 class="step-title">Download the APK</h3>
          <p class="step-desc">
            Use this site’s official direct download and confirm it matches the linked CipherGrid repository and release artifacts.
          </p>
          <div class="step-download-action">
            <a
              :href="downloadConfig.directApkUrl"
              :download="downloadConfig.filename"
              class="btn btn-primary w-full"
            >
              <span>Download APK</span>
              <span class="btn-arrow-box" aria-hidden="true">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </a>
          </div>
          <div class="step-artifact-box">
            <span class="mono-label">ARTIFACT & SIZE:</span>
            <code class="artifact-code">{{ downloadConfig.filename }} ({{ downloadConfig.fileSizeBytes }})</code>
          </div>
        </div>

        <!-- Step 2 -->
        <div class="step-card">
          <div class="step-num-badge mono-label">STEP 02</div>
          <h3 class="step-title">Allow this source if asked</h3>
          <p class="step-desc">
            Android may ask you to allow installs from the browser or file manager you are using. Allow only that specific source; you can toggle it off immediately afterward in system settings.
          </p>
          <div class="step-artifact-box">
            <span class="mono-label">SETTING SCOPE:</span>
            <span class="setting-note">Single app permission only</span>
          </div>
        </div>

        <!-- Step 3 -->
        <div class="step-card">
          <div class="step-num-badge mono-label">STEP 03</div>
          <h3 class="step-title">Review any warning</h3>
          <p class="step-desc">
            Independent distribution means Android may display an unknown or unverified app notice. If it is only an unverified prompt, you trust the official file, and the option is offered, choose <strong>More details → Install anyway</strong>. If Android identifies the file as harmful, offers no override, or the file does not match, stop and contact the maintainer.
          </p>
          <div class="step-artifact-box warning-border">
            <span class="mono-label">POLICY RECOMMENDATION:</span>
            <span class="setting-note">Do not disable Play Protect</span>
          </div>
        </div>

        <!-- Step 4 -->
        <div class="step-card">
          <div class="step-num-badge mono-label">STEP 04</div>
          <h3 class="step-title">Open CipherGrid</h3>
          <p class="step-desc">
            Finish the installation, launch CipherGrid from your app drawer, and review the brief onboarding guide emphasizing offline privacy and classical cipher limitations.
          </p>
          <div class="step-artifact-box">
            <span class="mono-label">NEXT STEP:</span>
            <span class="setting-note">Select Caesar or Vigenère</span>
          </div>
        </div>
      </div>

      <!-- Reassurance & Provenance Panel -->
      <div class="reassurance-panel">
        <div class="reassurance-header">
          <div class="reassurance-tagline mono-label">PROVENANCE & INTEGRITY</div>
          <h3 class="reassurance-title">Independently distributed. Open for inspection.</h3>
        </div>

        <div class="reassurance-grid">
          <div class="reassurance-col">
            <h4 class="col-heading">Source Code Transparency</h4>
            <p class="col-text">
              Every line of CipherGrid—from cipher algorithms to Android Capacitor bindings—is open for public audit. You can inspect the source, review pull requests, and build the APK yourself from source using Temurin Java 21 and Gradle.
            </p>
            <a
              :href="downloadConfig.repoUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="reassurance-link"
            >
              <span>View repository on GitHub →</span>
            </a>
          </div>

          <div class="reassurance-col">
            <h4 class="col-heading">Verified SHA-256 Checksum</h4>
            <p class="col-text">
              Compute the checksum of your downloaded APK using <code class="mono-code">sha256sum</code> or PowerShell <code class="mono-code">Get-FileHash</code> to verify complete bit-for-bit authenticity:
            </p>
            <div class="checksum-box">
              <span class="mono-label">SHA-256 HASH:</span>
              <code class="artifact-code">{{ downloadConfig.checksumSha256 }}</code>
            </div>
            <a
              :href="downloadConfig.actionsArtifactUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="reassurance-link"
            >
              <span>Inspect GitHub Actions CI runs →</span>
            </a>
          </div>

          <div class="reassurance-col">
            <h4 class="col-heading">Google Play Protect</h4>
            <p class="col-text">
              Play Protect automatically checks apps from outside Google Play. Distribution outside Play does not imply an override is guaranteed. Always verify checksums and maintain your device security policies.
            </p>
            <a
              href="https://support.google.com/googleplay/answer/2812853?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              class="reassurance-link"
            >
              <span>Read Google Play Protect guidance →</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { downloadConfig } from '@/config/download';
</script>

<style scoped>
.install-section {
  padding-top: 64px;
  padding-bottom: 96px;
  background-color: var(--cg-surface);
  border-top: 1px solid var(--cg-line);
}

@media (min-width: 1024px) {
  .install-section {
    padding-top: 104px;
    padding-bottom: 128px;
  }
}

.install-intro {
  margin-bottom: 36px;
}

.section-tag {
  color: var(--cg-primary);
  margin-bottom: 8px;
  display: block;
}

/* Orange Safety Notice Band */
.safety-band {
  background-color: var(--cg-canvas);
  border: 1px solid var(--cg-line);
  border-left: 4px solid var(--cg-signal);
  padding: 16px 20px;
  margin-bottom: 40px;
  box-shadow: 2px 2px 0 var(--cg-line);
}

.band-tag {
  color: var(--cg-signal);
  font-weight: 700;
  font-size: 11px;
  margin-bottom: 6px;
}

.band-text {
  font-size: 14px;
  line-height: 1.55;
  color: var(--cg-ink);
}

/* 4-Column Step Cards */
.install-steps-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom: 48px;
}

@media (min-width: 768px) {
  .install-steps-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1100px) {
  .install-steps-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.step-card {
  background-color: var(--cg-canvas);
  border: 1px solid var(--cg-line);
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-radius: var(--cg-radius);
  box-shadow: 3px 3px 0 var(--cg-line);
  position: relative;
}

.step-num-badge {
  font-size: 12px;
  font-weight: 800;
  color: var(--cg-primary);
  background-color: rgba(35, 71, 255, 0.08);
  padding: 3px 8px;
  border: 1px solid var(--cg-primary);
  width: fit-content;
}

.step-title {
  font-size: 18px;
  font-weight: 700;
  line-height: 1.25;
  color: var(--cg-ink);
}

.step-desc {
  font-size: 14px;
  line-height: 1.5;
  color: var(--cg-muted);
}

.step-desc strong {
  color: var(--cg-ink);
}

.step-artifact-box {
  margin-top: auto;
  padding-top: 12px;
  border-top: 1px solid var(--cg-line);
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.step-artifact-box span {
  font-size: 10px;
  color: var(--cg-muted);
}

.artifact-code {
  font-family: var(--cg-mono);
  font-size: 11px;
  background-color: var(--cg-surface);
  border: 1px solid var(--cg-line);
  padding: 4px 6px;
  word-break: break-all;
  color: var(--cg-ink);
}

.setting-note {
  font-family: var(--cg-mono);
  font-size: 11px;
  font-weight: 600;
  color: var(--cg-ink);
}

.warning-border {
  border-top-color: var(--cg-signal);
}

/* Reassurance & Provenance Panel */
.reassurance-panel {
  background-color: var(--cg-surface-2);
  border: 1px solid var(--cg-line);
  padding: 32px 24px;
  border-radius: var(--cg-radius);
  box-shadow: var(--cg-shadow);
}

@media (min-width: 1024px) {
  .reassurance-panel {
    padding: 48px;
  }
}

.reassurance-header {
  margin-bottom: 28px;
}

.reassurance-tagline {
  color: var(--cg-primary);
  margin-bottom: 6px;
}

.reassurance-title {
  font-size: clamp(22px, 3vw, 32px);
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--cg-ink);
}

.reassurance-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 28px;
}

@media (min-width: 900px) {
  .reassurance-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }
}

.reassurance-col {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.col-heading {
  font-size: 16px;
  font-weight: 700;
  color: var(--cg-ink);
}

.col-text {
  font-size: 14px;
  line-height: 1.55;
  color: var(--cg-muted);
}

.reassurance-link {
  font-family: var(--cg-mono);
  font-size: 12px;
  font-weight: 700;
  color: var(--cg-primary);
  text-decoration: none;
  margin-top: auto;
  padding-top: 8px;
}

.reassurance-link:hover {
  text-decoration: underline;
}
</style>

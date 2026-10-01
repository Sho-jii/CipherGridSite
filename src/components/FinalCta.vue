<template>
  <section class="final-cta-section dark-surface" aria-labelledby="final-cta-heading">
    <div class="container">
      <div class="terminal-dark-panel">
        <!-- Static Subtle Decorative Grid G in Background -->
        <div class="pixel-g-backdrop" aria-hidden="true">
          <div class="pixel-grid">
            <span class="px on"></span><span class="px on"></span><span class="px on"></span><span class="px on"></span><span class="px on"></span>
            <span class="px on"></span><span class="px off"></span><span class="px off"></span><span class="px off"></span><span class="px off"></span>
            <span class="px on"></span><span class="px off"></span><span class="px on"></span><span class="px on"></span><span class="px on"></span>
            <span class="px on"></span><span class="px off"></span><span class="px off"></span><span class="px off"></span><span class="px on"></span>
            <span class="px on"></span><span class="px on"></span><span class="px on"></span><span class="px on"></span><span class="px on"></span>
          </div>
        </div>

        <div class="panel-content">
          <div class="panel-eyebrow">
            <span class="badge badge-signal">READY FOR DEPLOYMENT</span>
            <span class="mono-label text-cream-muted">VERSION {{ downloadConfig.version }}</span>
          </div>

          <h2 id="final-cta-heading" class="final-title">
            Your next pattern starts here.
          </h2>

          <p class="final-lead">
            Download the Android APK to analyze classical ciphers, scan physical text with on-device OCR, and execute batch pipelines on your mobile device.
          </p>

          <div class="final-actions">
            <a
              :href="downloadConfig.directApkUrl"
              :download="downloadConfig.filename"
              class="btn btn-primary btn-large"
              aria-label="Download CipherGrid Android APK"
            >
              <span>Download APK</span>
              <span class="btn-arrow-box" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </a>

            <a
              :href="downloadConfig.repoUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-secondary-dark"
            >
              <span>View Source on GitHub</span>
            </a>
          </div>

          <!-- Bottom Metadata Row -->
          <div class="final-meta-row">
            <div class="meta-item">
              <span class="mono-label label-dim">PACKAGE</span>
              <span class="mono-label label-bright">{{ downloadConfig.filename }}</span>
            </div>
            <div class="meta-item">
              <span class="mono-label label-dim">FILE SIZE</span>
              <span class="mono-label label-bright">{{ downloadConfig.fileSizeBytes }}</span>
            </div>
            <div class="meta-item">
              <span class="mono-label label-dim">REQUIREMENT</span>
              <span class="mono-label label-bright">{{ downloadConfig.minAndroid }}</span>
            </div>
            <div class="meta-item">
              <span class="mono-label label-dim">DISTRIBUTION</span>
              <span class="mono-label label-bright">Direct Official APK Download</span>
            </div>
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
.final-cta-section {
  padding-top: 64px;
  padding-bottom: 64px;
  background-color: var(--cg-canvas);
}

@media (min-width: 1024px) {
  .final-cta-section {
    padding-top: 96px;
    padding-bottom: 96px;
  }
}

.terminal-dark-panel {
  position: relative;
  background-color: var(--cg-dark);
  color: #f7f3e9;
  border: 1px solid #283344;
  border-radius: var(--cg-radius);
  padding: 48px 24px;
  overflow: hidden;
  box-shadow: 8px 8px 0 rgba(17, 19, 24, 0.2);
}

@media (min-width: 1024px) {
  .terminal-dark-panel {
    padding: 72px 56px;
  }
}

/* 5x5 Pixel G Subtle Backdrop */
.pixel-g-backdrop {
  position: absolute;
  right: -20px;
  bottom: -20px;
  opacity: 0.045;
  pointer-events: none;
  z-index: 0;
}

.pixel-grid {
  display: grid;
  grid-template-columns: repeat(5, 56px);
  gap: 8px;
}

.pixel-grid .px {
  width: 56px;
  height: 56px;
  border-radius: 2px;
}

.pixel-grid .px.on {
  background-color: #ffffff;
}

.panel-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 680px;
}

.panel-eyebrow {
  display: flex;
  align-items: center;
  gap: 12px;
}

.text-cream-muted {
  color: #a0a6b5;
}

.final-title {
  font-size: clamp(36px, 5.5vw, 64px);
  font-weight: 800;
  line-height: 1.02;
  letter-spacing: -0.04em;
  color: #ffffff;
}

.final-lead {
  font-size: clamp(16px, 2vw, 19px);
  line-height: 1.55;
  color: #b8c0d1;
}

.final-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  margin-top: 8px;
}

.btn-large {
  min-height: 56px;
  min-width: 200px;
}

.btn-secondary-dark {
  background-color: transparent;
  border: 1px solid #434f63;
  color: #ffffff;
  box-shadow: 4px 4px 0 #000000;
}

.btn-secondary-dark:hover {
  background-color: #1a2230;
  border-color: #ffffff;
}

.final-meta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-top: 16px;
  padding-top: 24px;
  border-top: 1px solid #283344;
}

.meta-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.label-dim {
  font-size: 10px;
  color: #7b8599;
}

.label-bright {
  font-size: 12px;
  color: #e2e7f2;
}
</style>

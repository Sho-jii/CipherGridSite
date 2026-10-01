<template>
  <section class="hero-section" aria-labelledby="hero-title">
    <div class="container hero-container">
      <!-- Left Column: Copy & Actions -->
      <div class="hero-copy-column">
        <!-- Eyebrow -->
        <div class="eyebrow-wrapper">
          <span class="eyebrow">
            <span class="badge badge-signal">ANDROID</span>
            <span>OPEN SOURCE</span>
          </span>
        </div>

        <!-- H1 in overflow-hidden mask -->
        <div class="title-mask">
          <h1 id="hero-title" class="hero-title animate-hero-line">
            CipherGrid
          </h1>
        </div>

        <!-- Tagline & Statement -->
        <p class="hero-statement animate-hero-copy">
          Decode the pattern.<br />Understand the method.
        </p>

        <!-- Lead paragraph -->
        <p class="lead-text animate-hero-copy">
          Explore classical ciphers, capture printed text with offline OCR, and build repeatable cryptographic workflows in one mobile workbench.
        </p>

        <!-- Primary & Secondary CTA Group -->
        <div class="hero-cta-group animate-hero-cta">
          <a
            :href="downloadConfig.directApkUrl"
            :download="downloadConfig.filename"
            class="btn btn-primary hero-btn-main"
            aria-label="Download CipherGrid APK"
          >
            <span>Download APK</span>
            <span class="btn-arrow-box" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </span>
          </a>

          <a href="#install" class="btn btn-secondary">
            <span>Install Guide</span>
          </a>
        </div>

        <!-- Release & Independence Metadata -->
        <div class="hero-metadata animate-hero-cta">
          <div class="meta-tagline">
            <span class="status-indicator" aria-hidden="true"></span>
            <span class="mono-label">Direct APK download ({{ downloadConfig.fileSizeBytes }}) · Not on Google Play</span>
          </div>
          <div class="meta-chips">
            <span class="badge">v{{ downloadConfig.version }}</span>
            <span class="badge badge-signal">{{ downloadConfig.fileSizeBytes }}</span>
            <span class="badge">MIN {{ downloadConfig.minAndroid }}</span>
            <span class="badge badge-blue">9 CIPHERS</span>
            <span class="badge">LOCAL OCR</span>
          </div>
        </div>
      </div>

      <!-- Right Column: Realistic Phone Presentation -->
      <div class="hero-phone-column animate-hero-phone">
        <div class="phone-stage">
          <!-- Offset Graphic Plates -->
          <div class="hero-plate plate-blue" aria-hidden="true"></div>
          <div class="hero-plate plate-orange" aria-hidden="true"></div>

          <!-- Realistic Phone Simulation -->
          <div class="phone-mockup">
            <div class="phone-camera-dot" aria-hidden="true"></div>
            <div class="phone-screen">
              <img
                src="/assets/screenshots/home.png"
                alt="CipherGrid Android Home screen running on mobile device"
                width="390"
                height="844"
                loading="eager"
              />
            </div>
          </div>

          <!-- Subtle Grid Alignment Marks -->
          <div class="grid-cross top-left" aria-hidden="true">+</div>
          <div class="grid-cross top-right" aria-hidden="true">+</div>
          <div class="grid-cross bottom-left" aria-hidden="true">+</div>
          <div class="grid-cross bottom-right" aria-hidden="true">+</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { downloadConfig } from '@/config/download';
</script>

<style scoped>
.hero-section {
  padding-top: calc(var(--header-height) + 32px);
  padding-bottom: 64px;
  position: relative;
  overflow: hidden;
}

@media (min-width: 1024px) {
  .hero-section {
    padding-top: calc(var(--header-height) + 64px);
    padding-bottom: 96px;
  }
}

.hero-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  align-items: center;
}

@media (min-width: 1024px) {
  .hero-container {
    grid-template-columns: 7fr 5fr;
    gap: 56px;
  }
}

.hero-copy-column {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.eyebrow-wrapper {
  margin-bottom: 4px;
}

.title-mask {
  overflow: hidden;
  padding-bottom: 4px;
}

.hero-statement {
  margin-top: 4px;
}

.hero-cta-group {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  margin-top: 8px;
}

.hero-btn-main {
  min-width: 200px;
}

.hero-metadata {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 12px;
  padding-top: 16px;
  border-top: 1px solid var(--cg-line);
}

.meta-tagline {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--cg-muted);
}

.status-indicator {
  width: 8px;
  height: 8px;
  background-color: var(--cg-success);
  border-radius: 50%;
  display: inline-block;
}

.meta-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

/* Phone Stage & Offset Plates */
.hero-phone-column {
  display: flex;
  justify-content: center;
}

.phone-stage {
  position: relative;
  display: inline-block;
  padding: 12px;
  max-width: 100%;
}

@media (min-width: 640px) {
  .phone-stage {
    padding: 16px;
  }
}

.hero-plate {
  position: absolute;
  border-radius: 2px;
}

.plate-blue {
  width: 100%;
  height: 100%;
  top: 12px;
  left: 12px;
  background-color: var(--cg-primary);
  border: 1px solid var(--cg-ink);
  z-index: 0;
  box-shadow: 3px 3px 0 rgba(17, 19, 24, 0.12);
}

@media (min-width: 640px) {
  .plate-blue {
    top: 20px;
    left: 20px;
    box-shadow: 4px 4px 0 rgba(17, 19, 24, 0.12);
  }
}

.plate-orange {
  width: 70%;
  height: 60%;
  top: -8px;
  left: -8px;
  background-color: var(--cg-signal);
  border: 1px solid var(--cg-ink);
  z-index: 0;
}

@media (min-width: 640px) {
  .plate-orange {
    top: -12px;
    left: -12px;
  }
}

.grid-cross {
  position: absolute;
  font-family: var(--cg-mono);
  font-size: 14px;
  font-weight: 700;
  color: var(--cg-muted);
  user-select: none;
}

.top-left { top: -6px; left: -6px; }
.top-right { top: -6px; right: -6px; }
.bottom-left { bottom: -6px; left: -6px; }
.bottom-right { bottom: -6px; right: -6px; }
</style>

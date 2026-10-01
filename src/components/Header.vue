<template>
  <header
    class="site-header"
    :class="{ 'header-scrolled': isScrolled }"
    role="banner"
  >
    <div class="container header-container">
      <!-- Brand Lockup -->
      <a href="#" class="brand-lockup" aria-label="CipherGrid home">
        <div class="logo-tile" aria-hidden="true">
          <img src="/assets/ciphergrid-logo.png" alt="" class="logo-img" />
        </div>
        <div class="brand-text">
          <span class="brand-name">CipherGrid</span>
          <span class="brand-sub">FIELD TERMINAL</span>
        </div>
      </a>

      <!-- Desktop Nav -->
      <nav class="desktop-nav" aria-label="Primary navigation">
        <a href="#preview" class="nav-link">
          <span class="nav-num">01</span>
          <span class="nav-label">Preview</span>
        </a>
        <a href="#features" class="nav-link">
          <span class="nav-num">02</span>
          <span class="nav-label">Features</span>
        </a>
        <a href="#install" class="nav-link">
          <span class="nav-num">03</span>
          <span class="nav-label">Install</span>
        </a>
      </nav>

      <!-- Header Actions -->
      <div class="header-actions">
        <a
          :href="downloadConfig.repoUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="github-link"
          aria-label="GitHub Repository"
          title="GitHub Repository"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
          </svg>
        </a>

        <a
          :href="downloadConfig.directApkUrl"
          :download="downloadConfig.filename"
          class="header-cta btn-primary"
          aria-label="Download CipherGrid APK"
        >
          <span>Download APK</span>
          <span class="btn-arrow-box" aria-hidden="true">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </span>
        </a>

        <!-- Mobile Menu Toggle Button -->
        <button
          type="button"
          class="mobile-menu-toggle"
          :aria-expanded="isMobileMenuOpen"
          aria-controls="mobile-nav-panel"
          aria-label="Toggle mobile menu"
          @click="toggleMobileMenu"
        >
          <svg v-if="!isMobileMenuOpen" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
          <svg v-else width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Drawer Panel -->
    <div
      v-if="isMobileMenuOpen"
      id="mobile-nav-panel"
      class="mobile-panel"
      role="region"
      aria-label="Mobile navigation"
      @keydown.esc="closeMobileMenu"
    >
      <div class="container mobile-panel-inner">
        <nav class="mobile-nav-links">
          <a href="#preview" class="mobile-nav-link" @click="closeMobileMenu">
            <span class="mono-label">01</span>
            <span>Preview</span>
          </a>
          <a href="#features" class="mobile-nav-link" @click="closeMobileMenu">
            <span class="mono-label">02</span>
            <span>Features</span>
          </a>
          <a href="#install" class="mobile-nav-link" @click="closeMobileMenu">
            <span class="mono-label">03</span>
            <span>Install Guide</span>
          </a>
          <a
            :href="downloadConfig.repoUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="mobile-nav-link"
            @click="closeMobileMenu"
          >
            <span class="mono-label">GH</span>
            <span>Source Code</span>
          </a>
        </nav>
        <div class="mobile-panel-footer">
          <a
            :href="downloadConfig.directApkUrl"
            :download="downloadConfig.filename"
            class="btn btn-primary w-full"
            @click="closeMobileMenu"
          >
            <span>Download APK ({{ downloadConfig.fileSizeBytes }})</span>
            <span class="btn-arrow-box" aria-hidden="true">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { downloadConfig } from '@/config/download';

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

function handleScroll() {
  isScrolled.value = window.scrollY > 40;
}

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false;
}

function handleKeyDown(e: KeyboardEvent) {
  if (e.key === 'Escape' && isMobileMenuOpen.value) {
    closeMobileMenu();
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('keydown', handleKeyDown);
});
</script>

<style scoped>
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);
  background-color: rgba(242, 240, 233, 0.85);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-bottom: 1px solid transparent;
  z-index: 100;
  transition: background-color 220ms ease, border-color 220ms ease, box-shadow 220ms ease;
}

.header-scrolled {
  background-color: var(--cg-surface);
  border-bottom: 1px solid var(--cg-line);
  box-shadow: 0 2px 8px rgba(17, 19, 24, 0.04);
}

.header-container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.brand-lockup {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: var(--cg-ink);
}

.logo-tile {
  width: 40px;
  height: 40px;
  background-color: var(--cg-logo-plaque);
  border: 1px solid var(--cg-logo-border);
  box-shadow: 3px 3px 0 var(--cg-primary), -2px -2px 0 var(--cg-signal);
  display: grid;
  place-items: center;
  padding: 4px;
  border-radius: var(--cg-radius);
}

.logo-img {
  width: 30px;
  height: 30px;
  object-fit: contain;
}

.brand-text {
  display: flex;
  flex-direction: column;
}

.brand-name {
  font-size: 19px;
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1;
  color: var(--cg-ink);
}

.brand-sub {
  font-family: var(--cg-mono);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.14em;
  color: var(--cg-muted);
  margin-top: 3px;
}

.desktop-nav {
  display: none;
  align-items: center;
  gap: 32px;
}

@media (min-width: 900px) {
  .desktop-nav {
    display: flex;
  }
}

.nav-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: var(--cg-ink);
  font-size: 14px;
  font-weight: 600;
  position: relative;
  padding: 6px 0;
}

.nav-num {
  font-family: var(--cg-mono);
  font-size: 11px;
  color: var(--cg-muted);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--cg-primary);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 220ms var(--ease-ui);
}

.nav-link:hover::after,
.nav-link:focus-visible::after {
  transform: scaleX(1);
  transform-origin: left;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.github-link {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border: 1px solid var(--cg-line);
  background-color: var(--cg-surface);
  color: var(--cg-ink);
  text-decoration: none;
  border-radius: var(--cg-radius);
  transition: border-color 180ms ease, background-color 180ms ease;
}

.github-link:hover {
  border-color: var(--cg-ink);
  background-color: var(--cg-surface-2);
}

.header-cta {
  display: none;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  min-height: 44px;
  padding: 0 16px;
  border-radius: var(--cg-radius);
  border: 1px solid var(--cg-primary);
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  background-color: var(--cg-primary);
  color: #ffffff;
  box-shadow: 3px 3px 0 var(--cg-dark);
}

@media (min-width: 640px) {
  .header-cta {
    display: inline-flex;
  }
}

.header-cta:hover {
  background-color: #1a3cf0;
  transform: translateY(-1px);
  box-shadow: 4px 4px 0 var(--cg-dark);
}

.mobile-menu-toggle {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border: 1px solid var(--cg-line);
  background-color: var(--cg-surface);
  color: var(--cg-ink);
  border-radius: var(--cg-radius);
  cursor: pointer;
}

@media (min-width: 900px) {
  .mobile-menu-toggle {
    display: none;
  }
}

.mobile-panel {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: var(--cg-surface);
  border-bottom: 2px solid var(--cg-ink);
  box-shadow: 0 12px 24px rgba(17, 19, 24, 0.1);
  padding: 20px 0;
  animation: mobilePanelIn 240ms var(--ease-out);
}

@keyframes mobilePanelIn {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.mobile-panel-inner {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.mobile-nav-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.mobile-nav-link {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background-color: var(--cg-canvas);
  border: 1px solid var(--cg-line);
  text-decoration: none;
  color: var(--cg-ink);
  font-size: 16px;
  font-weight: 700;
  border-radius: var(--cg-radius);
}

.mobile-nav-link:hover {
  background-color: var(--cg-surface-2);
  border-color: var(--cg-ink);
}

.w-full {
  width: 100%;
}
</style>

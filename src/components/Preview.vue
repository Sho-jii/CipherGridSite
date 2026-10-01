<template>
  <section id="preview" class="preview-section" aria-labelledby="preview-heading">
    <div class="container">
      <!-- Section Header -->
      <div class="preview-intro">
        <span class="mono-label section-tag">01 / PREVIEW</span>
        <h2 id="preview-heading" class="section-title">Inside the grid</h2>
        <p class="lead-text">
          Four specialized environments designed for hands-on cryptographic exploration, on-device text capture, and structured cryptanalysis.
        </p>
      </div>

      <!-- Mobile / Tablet / Short Screen: Interactive Carousel Controller -->
      <div class="mobile-preview-controls">
        <div class="screen-selector-tabs" role="tablist" aria-label="CipherGrid screens">
          <button
            v-for="(chapter, idx) in chapters"
            :key="chapter.id"
            type="button"
            role="tab"
            :aria-selected="activeIndex === idx"
            :aria-controls="`chapter-panel-${chapter.id}`"
            class="tab-btn"
            :class="{ active: activeIndex === idx }"
            @click="selectChapter(idx)"
          >
            <span class="tab-index">0{{ idx + 1 }}</span>
            <span class="tab-title">{{ chapter.shortTitle }}</span>
          </button>
        </div>

        <div class="mobile-nav-buttons">
          <button
            type="button"
            class="arrow-btn"
            aria-label="Previous screen"
            :disabled="activeIndex === 0"
            @click="prevChapter"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          <span class="mono-label nav-indicator">0{{ activeIndex + 1 }} / 0{{ chapters.length }}</span>
          <button
            type="button"
            class="arrow-btn"
            aria-label="Next screen"
            :disabled="activeIndex === chapters.length - 1"
            @click="nextChapter"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Main Layout: Dual Column (Sticky Phone on Desktop, Story Scroll on Right) -->
      <div class="preview-dual-layout">
        <!-- Sticky Phone Column (Left on Desktop, Top on Mobile) -->
        <div class="sticky-phone-col">
          <div class="sticky-stage">
            <div class="phone-mockup">
              <div class="phone-camera-dot" aria-hidden="true"></div>
              <div class="phone-screen">
                <transition name="screen-crossfade" mode="out-in">
                  <img
                    :key="activeChapter.id"
                    :src="activeChapter.screenshot"
                    :alt="activeChapter.altText"
                    width="390"
                    height="844"
                    loading="lazy"
                  />
                </transition>
              </div>
            </div>

            <!-- Screen Label Plaque -->
            <div class="screen-plaque">
              <span class="plaque-index mono-label">0{{ activeIndex + 1 }}</span>
              <span class="plaque-title">{{ activeChapter.route }}</span>
              <span class="plaque-badge badge">390×844 EMULATED</span>
            </div>
          </div>
        </div>

        <!-- Narrative Story Column (Right on Desktop, Below on Mobile) -->
        <div class="narrative-col">
          <article
            v-for="(chapter, idx) in chapters"
            :id="`chapter-panel-${chapter.id}`"
            :key="chapter.id"
            ref="chapterElements"
            class="narrative-chapter"
            :class="{ active: activeIndex === idx }"
            :data-index="idx"
          >
            <div class="chapter-card">
              <div class="chapter-meta">
                <span class="badge badge-signal">CHAPTER 0{{ idx + 1 }}</span>
                <span class="mono-label">{{ chapter.category }}</span>
              </div>

              <h3 class="feature-title">{{ chapter.title }}</h3>
              <p class="body-text">{{ chapter.description }}</p>

              <!-- Highlights Grid -->
              <div class="chapter-highlights">
                <div
                  v-for="(hl, hlIdx) in chapter.highlights"
                  :key="hlIdx"
                  class="highlight-item"
                >
                  <span class="hl-marker">■</span>
                  <span>{{ hl }}</span>
                </div>
              </div>

              <!-- Verification Details -->
              <div class="chapter-proof">
                <div class="proof-label mono-label">RUNTIME CAPTURE STATE</div>
                <div class="proof-state mono-label">{{ chapter.runtimeState }}</div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';

interface Chapter {
  id: string;
  shortTitle: string;
  title: string;
  category: string;
  route: string;
  screenshot: string;
  altText: string;
  description: string;
  highlights: string[];
  runtimeState: string;
}

const chapters: Chapter[] = [
  {
    id: 'workspace',
    shortTitle: 'Workspace',
    title: 'Manual cipher execution with live explanations',
    category: 'TRANSFORMATION ENGINE',
    route: '/workspace',
    screenshot: '/assets/screenshots/workspace.png',
    altText: 'CipherGrid workspace executing Caesar cipher with sample input',
    description:
      'The core workspace features full encrypt/decrypt duality across nine classical ciphers. It provides immediate character validation, shift and keyword normalization, and detailed step-by-step breakdown of how each character is transformed.',
    highlights: [
      'Registry-driven: Caesar, Vigenère, Atbash, Affine, Rail Fence, Columnar, Playfair, Hill, Autokey',
      'Step inspector highlighting active input and mapped output glyphs',
      'One-tap swap input/output and instant QR payload generation',
    ],
    runtimeState: 'Caesar shift 3 applied to "MEET AT THE GRID" → "PHHW DW WKH JULG"',
  },
  {
    id: 'scan',
    shortTitle: 'Scanner',
    title: 'On-device OCR without external cloud APIs',
    category: 'OPTICAL RECOGNITION',
    route: '/scan',
    screenshot: '/assets/screenshots/scan.png',
    altText: 'CipherGrid optical scanner interface',
    description:
      'Capture printed ciphertext from book pages, puzzle sheets, or classroom handouts. The scanner uses native Google ML Kit on Android and a lazy-loaded Tesseract worker in web browsers to recognize characters locally without leaking data to third parties.',
    highlights: [
      'Device camera capture and gallery selection through Capacitor',
      'Review, correct, and edit recognized text before processing',
      'Direct one-tap handoff to Encrypt, Decrypt, or Cryptanalysis',
    ],
    runtimeState: 'Offline text recognition engine ready with local Latin language model',
  },
  {
    id: 'analyze',
    shortTitle: 'Analyze',
    title: 'Deterministic cryptanalysis and candidate scoring',
    category: 'ANALYSIS LABORATORY',
    route: '/analyze',
    screenshot: '/assets/screenshots/analyze.png',
    altText: 'CipherGrid cryptanalysis laboratory with frequency chart and rankings',
    description:
      'Analyze ciphertext without guesswork or fake machine learning. Inspect letter frequency distributions, calculate Index of Coincidence, factor repeated n-grams via Kasiski examination, and run brute-force candidate rankings evaluated against English and Filipino scoring profiles.',
    highlights: [
      'Exhaustive 26-shift Caesar brute force with confidence percentages',
      'Affine key candidate ranking across all 12 coprime multipliers',
      'Vigenère key length estimation and per-column letter frequency charts',
    ],
    runtimeState: 'Calculated frequencies and ranked Caesar candidates for ciphertext',
  },
  {
    id: 'batch',
    shortTitle: 'Batch & Recipes',
    title: 'Automated CSV/TXT workflows and chained pipelines',
    category: 'WORKFLOW AUTOMATION',
    route: '/batch',
    screenshot: '/assets/screenshots/batch.png',
    altText: 'CipherGrid batch jobs and file import interface',
    description:
      'Process high-volume files without manual copy-pasting. Import structured CSV files with custom parameter columns or plaintext lists. Build reusable local Recipes that chain preprocessing, ciphers, and export steps with full intermediate visibility.',
    highlights: [
      'Independent per-row validation and non-destructive CSV/TXT export',
      'Global algorithm parameters or individual per-row overrides',
      'Local Recipes: Normalize whitespace → Cipher transform → QR code → Share',
    ],
    runtimeState: 'Batch processing engine loaded with CSV/TXT parsing schemas',
  },
];

const activeIndex = ref(0);
const activeChapter = computed(() => chapters[activeIndex.value] ?? chapters[0]!);
const chapterElements = ref<HTMLElement[]>([]);

function selectChapter(index: number) {
  activeIndex.value = index;
}

function prevChapter() {
  if (activeIndex.value > 0) {
    activeIndex.value -= 1;
  }
}

function nextChapter() {
  if (activeIndex.value < chapters.length - 1) {
    activeIndex.value += 1;
  }
}

let observer: IntersectionObserver | null = null;

onMounted(() => {
  // Use IntersectionObserver on desktop to update active screen as chapters scroll
  if (window.innerWidth >= 1024) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index') ?? 0);
            activeIndex.value = index;
          }
        });
      },
      {
        threshold: 0.55,
      }
    );

    const elements = document.querySelectorAll('.narrative-chapter');
    elements.forEach((el) => observer?.observe(el));
  }
});

onUnmounted(() => {
  observer?.disconnect();
});
</script>

<style scoped>
.preview-section {
  padding-top: 64px;
  padding-bottom: 96px;
  background-color: var(--cg-surface);
  border-top: 1px solid var(--cg-line);
  border-bottom: 1px solid var(--cg-line);
}

@media (min-width: 1024px) {
  .preview-section {
    padding-top: 104px;
    padding-bottom: 128px;
  }
}

.preview-intro {
  margin-bottom: 40px;
}

.section-tag {
  color: var(--cg-primary);
  margin-bottom: 8px;
  display: block;
}

/* Mobile Screen Selector Controls */
.mobile-preview-controls {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
}

@media (min-width: 1024px) {
  .mobile-preview-controls {
    display: none;
  }
}

.screen-selector-tabs {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border: 1px solid var(--cg-line);
  background-color: var(--cg-surface-2);
}

.tab-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 12px 6px;
  background-color: transparent;
  border: none;
  border-right: 1px solid var(--cg-line);
  cursor: pointer;
  color: var(--cg-muted);
  font-family: var(--cg-font);
  transition: background-color 180ms ease, color 180ms ease;
}

.tab-btn:last-child {
  border-right: none;
}

.tab-btn.active {
  background-color: var(--cg-primary);
  color: #ffffff;
}

.tab-index {
  font-family: var(--cg-mono);
  font-size: 11px;
  font-weight: 700;
}

.tab-title {
  font-size: 12px;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}

.mobile-nav-buttons {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.arrow-btn {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border: 1px solid var(--cg-line);
  background-color: var(--cg-surface);
  color: var(--cg-ink);
  cursor: pointer;
  border-radius: var(--cg-radius);
}

.arrow-btn:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.nav-indicator {
  color: var(--cg-muted);
}

/* Dual Column Layout */
.preview-dual-layout {
  display: flex;
  flex-direction: column;
  gap: 48px;
}

@media (min-width: 1024px) {
  .preview-dual-layout {
    display: grid;
    grid-template-columns: 5fr 7fr;
    gap: 64px;
    align-items: start;
    position: relative;
  }
}

/* Sticky Phone Column */
.sticky-phone-col {
  display: flex;
  justify-content: center;
}

@media (min-width: 1024px) {
  .sticky-phone-col {
    position: sticky;
    top: 96px;
    height: calc(100vh - 120px);
    max-height: 800px;
    align-items: center;
  }
}

.sticky-stage {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
  max-width: 310px;
}

.screen-plaque {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 8px 12px;
  background-color: var(--cg-canvas);
  border: 1px solid var(--cg-line);
  border-radius: var(--cg-radius);
  box-shadow: 2px 2px 0 var(--cg-line);
}

.plaque-index {
  color: var(--cg-primary);
  font-weight: 700;
}

.plaque-title {
  font-family: var(--cg-mono);
  font-size: 13px;
  font-weight: 700;
  color: var(--cg-ink);
}

.plaque-badge {
  font-size: 10px;
}

/* Narrative Story Column */
.narrative-col {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

@media (min-width: 1024px) {
  .narrative-col {
    gap: 0;
  }
}

.narrative-chapter {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media (min-width: 1024px) {
  .narrative-chapter {
    min-height: 65vh;
    padding: 32px 0;
  }
}

.chapter-card {
  padding: 24px;
  background-color: var(--cg-canvas);
  border: 1px solid var(--cg-line);
  border-radius: var(--cg-radius);
  box-shadow: var(--cg-shadow);
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: border-color 220ms ease, box-shadow 220ms ease;
}

@media (min-width: 1024px) {
  .chapter-card {
    padding: 36px;
  }
}

.narrative-chapter.active .chapter-card {
  border-color: var(--cg-primary);
  box-shadow: 6px 6px 0 var(--cg-primary);
}

.chapter-meta {
  display: flex;
  align-items: center;
  gap: 12px;
}

.chapter-highlights {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 4px;
}

.highlight-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 14px;
  color: var(--cg-ink);
  line-height: 1.45;
}

.hl-marker {
  color: var(--cg-primary);
  font-size: 10px;
  line-height: 1.8;
}

.chapter-proof {
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid var(--cg-line);
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.proof-label {
  font-size: 10px;
  color: var(--cg-muted);
}

.proof-state {
  font-size: 12px;
  color: var(--cg-signal);
  font-weight: 700;
}

/* Screen Crossfade Animation (350ms per spec) */
.screen-crossfade-enter-active {
  transition: opacity 350ms cubic-bezier(0.4, 0, 0.2, 1), transform 350ms cubic-bezier(0.4, 0, 0.2, 1);
}

.screen-crossfade-leave-active {
  transition: opacity 350ms cubic-bezier(0.4, 0, 0.2, 1), transform 350ms cubic-bezier(0.4, 0, 0.2, 1);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.screen-crossfade-enter-from {
  opacity: 0;
  transform: translateY(12px);
}

.screen-crossfade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@media (prefers-reduced-motion: reduce) {
  .screen-crossfade-enter-active,
  .screen-crossfade-leave-active {
    transition-duration: 0.01ms !important;
    transform: none !important;
  }
}
</style>

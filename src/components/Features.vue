<template>
  <section id="features" class="features-section" aria-labelledby="features-heading">
    <div class="container">
      <!-- Section Header -->
      <div class="features-intro">
        <span class="mono-label section-tag">02 / CAPABILITIES</span>
        <h2 id="features-heading" class="section-title">Engineered for cipher exploration</h2>
        <p class="lead-text">
          A disciplined suite of cryptographic tools organized into four structural modules with transparent math, verifiable steps, and zero external dependencies.
        </p>
      </div>

      <!-- Shared Rule 2x2 Grid -->
      <div class="features-instrument-grid">
        <!-- Module 001 -->
        <article class="feature-module">
          <div class="module-header">
            <span class="module-number mono-label">001</span>
            <span class="badge badge-blue">CIPHER ENGINE</span>
          </div>

          <h3 class="feature-title">Nine ways to transform text</h3>
          <p class="body-text">
            Execute classical cryptographic transformations with complete mathematical transparency. Caesar and Vigenère form the pedagogical foundation, complemented by Atbash, Affine, Rail Fence, Columnar Transposition, Playfair, Hill matrix operations, and Autokey.
          </p>

          <!-- Diagram: Alphabet Coordinate Strip / Shift Matrix -->
          <div class="module-diagram" aria-hidden="true">
            <div class="cipher-matrix-diagram">
              <div class="matrix-row header-row">
                <span class="matrix-cell">A</span>
                <span class="matrix-cell">B</span>
                <span class="matrix-cell">C</span>
                <span class="matrix-cell">D</span>
                <span class="matrix-cell">E</span>
                <span class="matrix-cell">...</span>
                <span class="matrix-cell">Z</span>
              </div>
              <div class="matrix-row shift-row">
                <span class="matrix-cell active-cell">D</span>
                <span class="matrix-cell active-cell">E</span>
                <span class="matrix-cell active-cell">F</span>
                <span class="matrix-cell active-cell">G</span>
                <span class="matrix-cell active-cell">H</span>
                <span class="matrix-cell">...</span>
                <span class="matrix-cell active-cell">C</span>
              </div>
              <div class="matrix-caption mono-label">Caesar Shift k=3 · C = (P + 3) mod 26</div>
            </div>
          </div>

          <ul class="module-specs">
            <li>Strict case and non-alphabetic character preservation</li>
            <li>Invertible 2×2 and 3×3 matrix determinant checks (Hill)</li>
            <li>5×5 key square generator with explicit I/J and filler rules (Playfair)</li>
          </ul>
        </article>

        <!-- Module 002 -->
        <article class="feature-module">
          <div class="module-header">
            <span class="module-number mono-label">002</span>
            <span class="badge badge-signal">OPTICAL WORKFLOW</span>
          </div>

          <h3 class="feature-title">From print to input</h3>
          <p class="body-text">
            Extract ciphertext directly from physical paper, puzzle worksheets, or lecture handouts. Built on Google ML Kit on Android and a worker-isolated Tesseract fallback in web browsers, recognition stays strictly on-device without remote telemetry or cloud calls.
          </p>

          <!-- Diagram: Optical Pipeline Flow -->
          <div class="module-diagram" aria-hidden="true">
            <div class="ocr-pipeline-diagram">
              <div class="pipe-node">
                <span class="pipe-icon">📷</span>
                <span class="mono-label">Capture</span>
              </div>
              <div class="pipe-arrow">→</div>
              <div class="pipe-node">
                <span class="pipe-icon">✂</span>
                <span class="mono-label">Crop / Review</span>
              </div>
              <div class="pipe-arrow">→</div>
              <div class="pipe-node active-pipe">
                <span class="pipe-icon">🔤</span>
                <span class="mono-label">Offline OCR</span>
              </div>
              <div class="pipe-arrow">→</div>
              <div class="pipe-node">
                <span class="pipe-icon">⚡</span>
                <span class="mono-label">Cipher Run</span>
              </div>
            </div>
          </div>

          <ul class="module-specs">
            <li>Review and correct OCR misreads before cipher processing</li>
            <li>Select specific line regions or recognized text blocks</li>
            <li>Zero cloud APIs, zero account requirements, 100% offline</li>
          </ul>
        </article>

        <!-- Module 003 -->
        <article class="feature-module">
          <div class="module-header">
            <span class="module-number mono-label">003</span>
            <span class="badge">CRYPTANALYSIS</span>
          </div>

          <h3 class="feature-title">See the pattern</h3>
          <p class="body-text">
            Analyze unknown ciphertext with classical cryptanalytic methods rather than claiming machine learning. Uncover structural rhythms through monogram frequencies, Index of Coincidence, Kasiski factor analysis, and candidate scoring against English and Filipino language profiles.
          </p>

          <!-- Diagram: Frequency Distribution Bars -->
          <div class="module-diagram" aria-hidden="true">
            <div class="freq-chart-diagram">
              <div class="freq-bar-col">
                <div class="freq-bar" style="height: 85%;"></div>
                <span class="mono-label">E</span>
              </div>
              <div class="freq-bar-col">
                <div class="freq-bar" style="height: 65%;"></div>
                <span class="mono-label">T</span>
              </div>
              <div class="freq-bar-col">
                <div class="freq-bar" style="height: 60%;"></div>
                <span class="mono-label">A</span>
              </div>
              <div class="freq-bar-col">
                <div class="freq-bar" style="height: 52%;"></div>
                <span class="mono-label">O</span>
              </div>
              <div class="freq-bar-col">
                <div class="freq-bar" style="height: 48%;"></div>
                <span class="mono-label">I</span>
              </div>
              <div class="freq-bar-col">
                <div class="freq-bar" style="height: 45%;"></div>
                <span class="mono-label">N</span>
              </div>
              <div class="freq-bar-col">
                <div class="freq-bar" style="height: 42%;"></div>
                <span class="mono-label">S</span>
              </div>
              <div class="freq-bar-col">
                <div class="freq-bar" style="height: 12%;"></div>
                <span class="mono-label">Z</span>
              </div>
            </div>
            <div class="chart-caption mono-label">IoC Threshold ≈ 0.0667 (English Plaintext)</div>
          </div>

          <ul class="module-specs">
            <li>Exhaustive 26-shift Caesar ranking with chi-squared scoring</li>
            <li>Affine key candidate evaluation across all 12 coprime multipliers</li>
            <li>Estimated Vigenère key lengths and per-column letter frequencies</li>
          </ul>
        </article>

        <!-- Module 004 -->
        <article class="feature-module">
          <div class="module-header">
            <span class="module-number mono-label">004</span>
            <span class="badge">BATCH JOBS & RECIPES</span>
          </div>

          <h3 class="feature-title">Repeat the workflow</h3>
          <p class="body-text">
            Execute batch operations on high-volume datasets. Import structured `.csv` or `.txt` lists, configure global settings or row-level key overrides, validate each row independently, and export non-destructive results. Chain reproducible steps with local Recipes.
          </p>

          <!-- Diagram: Batch Table Row Status -->
          <div class="module-diagram" aria-hidden="true">
            <div class="batch-rows-diagram">
              <div class="batch-row">
                <span class="row-num mono-label">#01</span>
                <span class="row-text">HELLO WORLD</span>
                <span class="badge badge-blue">CAESAR:3</span>
                <span class="badge" style="color: var(--cg-success); border-color: var(--cg-success);">OK</span>
              </div>
              <div class="batch-row">
                <span class="row-num mono-label">#02</span>
                <span class="row-text">SECRET CIPHER</span>
                <span class="badge">VIGENERE</span>
                <span class="badge" style="color: var(--cg-success); border-color: var(--cg-success);">OK</span>
              </div>
              <div class="batch-row">
                <span class="row-num mono-label">#03</span>
                <span class="row-text">SAMPLE MATRIX</span>
                <span class="badge">HILL 2x2</span>
                <span class="badge" style="color: var(--cg-success); border-color: var(--cg-success);">OK</span>
              </div>
            </div>
          </div>

          <ul class="module-specs">
            <li>Chunked execution with cancellation and failed-row retry</li>
            <li>Local Recipes: Normalize whitespace → Cipher → QR payload → Share</li>
            <li>Separate AES-256-GCM Secure Lab for modern authenticated encryption</li>
          </ul>
        </article>
      </div>

      <!-- Educational Safety Disclaimer Banner -->
      <aside class="educational-disclaimer" role="note" aria-label="Cryptographic Security Boundary Notice">
        <div class="disclaimer-icon" aria-hidden="true">⚠</div>
        <div class="disclaimer-content">
          <div class="disclaimer-heading mono-label">SECURITY CLASSIFICATION & EDUCATIONAL BOUNDARY</div>
          <p class="disclaimer-text">
            Classical ciphers (Caesar, Vigenère, Atbash, Affine, etc.) are educational historical algorithms and are <strong>not secure for protecting real secrets</strong>. Base64, Hexadecimal, and Binary are encodings, not encryption. SHA-256 is a one-way cryptographic hash and cannot be decrypted. For confidentiality, use CipherGrid's isolated AES-256-GCM Secure Lab.
          </p>
        </div>
      </aside>
    </div>
  </section>
</template>

<style scoped>
.features-section {
  padding-top: 64px;
  padding-bottom: 96px;
  background-color: var(--cg-canvas);
}

@media (min-width: 1024px) {
  .features-section {
    padding-top: 104px;
    padding-bottom: 128px;
  }
}

.features-intro {
  margin-bottom: 48px;
}

.section-tag {
  color: var(--cg-primary);
  margin-bottom: 8px;
  display: block;
}

/* Shared-Rule 2x2 Desktop Grid */
.features-instrument-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  background-color: var(--cg-line);
  gap: 1px;
  border: 1px solid var(--cg-line);
  min-width: 0;
  max-width: 100%;
}

@media (min-width: 900px) {
  .features-instrument-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.feature-module {
  background-color: var(--cg-surface);
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
  min-width: 0;
  max-width: 100%;
}

@media (min-width: 640px) {
  .feature-module {
    padding: 32px 24px;
  }
}

@media (min-width: 1024px) {
  .feature-module {
    padding: 44px 36px;
  }
}

.module-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.module-number {
  font-size: 16px;
  font-weight: 800;
  color: var(--cg-muted);
}

.module-diagram {
  margin: 12px 0;
  padding: 12px;
  background-color: var(--cg-surface-2);
  border: 1px solid var(--cg-line);
  border-radius: var(--cg-radius);
  max-width: 100%;
  overflow-x: auto;
}

/* Cipher Matrix Diagram */
.cipher-matrix-diagram {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.matrix-row {
  display: flex;
  gap: 6px;
  overflow-x: auto;
}

.matrix-cell {
  flex: 1;
  min-width: 28px;
  height: 28px;
  display: grid;
  place-items: center;
  font-family: var(--cg-mono);
  font-size: 12px;
  font-weight: 700;
  background-color: var(--cg-surface);
  border: 1px solid var(--cg-line);
  color: var(--cg-ink);
}

.active-cell {
  background-color: var(--cg-primary);
  color: #ffffff;
  border-color: var(--cg-primary);
}

.matrix-caption {
  font-size: 10px;
  color: var(--cg-muted);
  margin-top: 4px;
  text-align: right;
}

/* OCR Pipeline Diagram */
.ocr-pipeline-diagram {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.pipe-node {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 8px 10px;
  background-color: var(--cg-surface);
  border: 1px solid var(--cg-line);
  font-size: 10px;
}

.active-pipe {
  border-color: var(--cg-signal);
  background-color: rgba(255, 90, 31, 0.08);
}

.pipe-icon {
  font-size: 16px;
}

.pipe-arrow {
  color: var(--cg-muted);
  font-weight: 700;
}

/* Frequency Chart Diagram */
.freq-chart-diagram {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.freq-chart-diagram .freq-bar-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  flex: 1;
  height: 70px;
  justify-content: flex-end;
}

.freq-chart-diagram .freq-bar {
  width: 14px;
  background-color: var(--cg-primary);
  border: 1px solid var(--cg-ink);
}

.freq-chart-diagram {
  display: flex;
  flex-direction: column;
}

.freq-chart-diagram > div:first-child {
  display: flex;
  align-items: flex-end;
  gap: 8px;
  height: 70px;
}

.chart-caption {
  font-size: 10px;
  color: var(--cg-muted);
  margin-top: 4px;
  text-align: right;
}

/* Batch Rows Diagram */
.batch-rows-diagram {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.batch-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 10px;
  background-color: var(--cg-surface);
  border: 1px solid var(--cg-line);
  font-size: 11px;
}

.row-num {
  font-size: 10px;
  color: var(--cg-muted);
}

.row-text {
  font-family: var(--cg-mono);
  font-weight: 700;
  font-size: 11px;
}

/* Module Bullet Specs */
.module-specs {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: auto;
  padding-top: 8px;
}

.module-specs li {
  font-size: 13px;
  color: var(--cg-ink);
  line-height: 1.45;
  padding-left: 14px;
  position: relative;
}

.module-specs li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: var(--cg-primary);
  font-weight: 700;
}

/* Educational Disclaimer Banner */
.educational-disclaimer {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-top: 40px;
  padding: 20px 24px;
  background-color: var(--cg-surface-2);
  border: 1px solid var(--cg-line);
  border-left: 4px solid var(--cg-signal);
  box-shadow: 4px 4px 0 rgba(17, 19, 24, 0.08);
}

.disclaimer-icon {
  font-size: 20px;
  color: var(--cg-signal);
  line-height: 1;
}

.disclaimer-content {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.disclaimer-heading {
  font-size: 11px;
  font-weight: 700;
  color: var(--cg-signal);
}

.disclaimer-text {
  font-size: 14px;
  line-height: 1.55;
  color: var(--cg-ink);
}

.disclaimer-text strong {
  color: var(--cg-danger);
}
</style>

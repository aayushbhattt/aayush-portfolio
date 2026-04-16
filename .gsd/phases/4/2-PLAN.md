---
phase: 4
plan: 2
wave: 1
---

# Plan 4.2: Certificates Implementation

## Objective
Showcase technical and extracurricular accomplishments through a clean, unified Certificates section.

## Context
- `assets/certificates/` — WebP source files
- `index.html` — Section placement (after Achievements)
- `styles/certificates.css` — Modern grid/hover styles

## Tasks

<task type="auto">
  <name>Populate HTML for Certificates</name>
  <files>index.html</files>
  <action>
    Add `#certificates` section after `#achievements`.

    **Structure:**
    - Section header: "Technical <span>Certifications</span>".
    - `.certificates__grid` container.
    - 4 `.certificate-card` elements with:
      - `.certificate-card__image-container` → `img`.
      - `.certificate-card__title` (1 line).

    **Content:**
    1. AI-ML-certificate.webp → "AI/ML Fundamentals Certificate"
    2. Quantum-Computing-certificate.webp → "Quantum Computing Certification"
    3. InnoVedam-Certificate.webp → "InnoVedam Hackathon Excellence"
    4. blackbelt-certificate.webp → "Taekwondo Black Belt Certification"
  </action>
  <verify>Check index.html — 4 certificates should be listed with correct image paths.</verify>
  <done>
    - All 4 certificates present.
    - Captions match user intent.
  </done>
</task>

<task type="auto">
  <name>Style Certificates gallery</name>
  <files>styles/certificates.css</name>
  <action>
    Create `styles/certificates.css`.

    **Styles:**
    - `.certificates__grid`: Responsive grid (4 columns desktop, 2 tablet, 1 mobile).
    - `.certificate-card`: Minimalist frame, `background: var(--color-bg-secondary)`.
    - `.certificate-card img`: High-quality corners, `hover: scale(1.05)`, cursor pointer.
    - Transitions for smooth image interactions.
  </action>
  <verify>Check visuals — gallery should look professional and fit the dark theme.</verify>
  <done>
    - Responsive grid implemented.
    - Smooth hover effects active.
  </done>
</task>

## Success Criteria
- [ ] Certificates section live with all 4 WebP images.
- [ ] Captions are minimal (1-line).
- [ ] Section matches the site's dark tech aesthetic.

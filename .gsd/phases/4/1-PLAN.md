---
phase: 4
plan: 1
wave: 1
---

# Plan 4.1: Global UI Refinement (Grid & Profile)

## Objective
Enhance the site's technical aesthetic by applying a global blueprint grid and refining the profile photo with professional framing and "breathing" animations.

## Context
- `.gsd/SPEC.md` — Design tokens
- `styles/main.css` — Target for global grid
- `styles/about.css` — Target for profile refinement
- `index.html` — Navbar and Section structure

## Tasks

<task type="auto">
  <name>Implement Global Grid Background</name>
  <files>styles/main.css, styles/about.css</files>
  <action>
    **main.css:**
    - Add `body::before` pseudo-element to create a fixed technical grid across the whole site.
    - Grid size: 40px. Line color: `rgba(245, 237, 237, 0.025)`.
    - Ensure it's behind everything (`z-index: -1`).

    **about.css:**
    - Remove the local `.about::before` grid logic to avoid duplication.
  </action>
  <verify>Check index.html and projects.html — grid should be visible and consistent on both.</verify>
  <done>
    - Grid is site-wide.
    - About section local grid is removed.
  </done>
</task>

<task type="auto">
  <name>Refine Profile Image UI & Animation</name>
  <files>styles/about.css, index.html</files>
  <action>
    **index.html:**
    - Update profile image to `assets/images/profile.webp`.

    **about.css:**
    - Update `.about__image-accent`:
      - Perfectly align with image.
      - Use `::before` and `::after` on a wrapper to create red "L-Corners" at Top-Right and Bottom-Left.
    - Implement `@keyframes profileBreathe`:
      - Scale: 1 to 1.02 to 1.
      - Box-shadow: `0 0 10px rgba(215, 35, 35, 0.1)` to `0 0 25px rgba(215, 35, 35, 0.4)`.
    - Apply animation to `.about__image-wrapper`.
  </action>
  <verify>Check About section — photo should have corner borders and pulse slowly.</verify>
  <done>
    - Pulse + Glow animation active.
    - L-borders correctly positioned.
  </done>
</task>

## Success Criteria
- [ ] Technical grid persists across all pages.
- [ ] Profile photo has professional L-borders and smooth breathing animation.

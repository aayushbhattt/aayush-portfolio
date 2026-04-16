---
phase: 5
plan: 1
wave: 1
---

# Plan 5.1: Bug Fixes & Refinements

## Objective
Quickly resolve the UI bugs and issues identified from the Phase 4 review before building the new features.

## Context
- `styles/about.css` — Profile Image Border issue
- `styles/certificates.css` — Certificate size & hover scaling. Title text.
- `index.html` — Contact icons path (`.webp`), Section Titles, and Navbar routing.

## Tasks

<task type="auto">
  <name>Fix Profile Image L-Borders</name>
  <files>styles/about.css</files>
  <action>
    The `.about__image-accent` is currently inside `.about__image-wrapper`, which has `overflow: hidden`, causing the L-borders (`inset: -15px`) to be invisible.
    - Move `.about__image-accent` properties / logic so it is placed outside the `overflow: hidden` wrapper, or adjust the wrapper so it doesn't clip the borders.
    - Specifically: ensure the `::before` and `::after` L-brackets are visible while maintaining the breathing animation.
  </action>
  <verify>Check index.html About section — the red L-corners should be visible framing the breathing picture.</verify>
  <done>
    - L-borders are visible.
    - Image still breathes without clipping the borders.
  </done>
</task>

<task type="auto">
  <name>Refine Certificates Section</name>
  <files>index.html, styles/certificates.css</files>
  <action>
    **index.html:**
    - Change title from "Technical Certifications" to "Certifications".
    
    **styles/certificates.css:**
    - Change grid from 2 columns to 3 or 4 columns on desktop so cards are smaller.
    - Reduce hover scale effect (from 1.05 to maybe 1.02 or 1.01).
  </action>
  <verify>Check index.html Certificates section — cards should be smaller, title correct, hover subtle.</verify>
  <done>
    - Certificates grid is 3 or 4 columns.
    - Title updated.
    - Hover is less pronounced.
  </done>
</task>

<task type="auto">
  <name>Update Contact Icons & Navbar Links</name>
  <files>index.html</files>
  <action>
    - In the Contact section: Change the `src` of the 5 social icons to point to the `.webp` versions instead of `.png`. 
    - In Navbar: Change the "Projects" link to `href="projects.html"`.
    - In Projects CTA: Change "View All Projects" button to `href="projects.html"`.
  </action>
  <verify>Check index.html — Contact icons render correctly. Clicking "Projects" in nav goes to projects.html.</verify>
  <done>
    - `.webp` paths applied.
    - Navbar routes correctly.
  </done>
</task>

## Success Criteria
- [ ] Profile borders visible.
- [ ] Certificates look like cards, not massive images.
- [ ] Navigation works precisely to the correct pages.

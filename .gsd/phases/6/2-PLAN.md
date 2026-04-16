---
phase: 6
plan: 2
wave: 2
---

# Plan 6.2: Cinematic Navigation & Animations

## Objective
Implement site-wide scroll-triggered reveals and ensure the navbar correctly highlights the current page/section even across separate HTML files.

## Context
- `js/main.js` — Core logic entry
- `styles/main.css` — Animation classes target
- `index.html`, `projects.html` — Navbar and section targets

## Tasks

<task type="auto">
  <name>Implement Path-Aware Navbar</name>
  <files>js/main.js</files>
  <action>
    - Update navbar logic to check `window.location.pathname`.
    - If user is on `projects.html`, the "Projects" nav link should be forced to `.active`.
    - Ensure smooth scroll links on the homepage still update dynamically as you scroll.
  </action>
  <verify>Navigate to projects.html — "Projects" should be lit up red. On index.html, scroll between sections and see the active dash move.</verify>
  <done>
    - Navbar is aware of separate pages.
  </done>
</task>

<task type="auto">
  <name>Site-Wide Scroll Reveals</name>
  <files>styles/main.css, js/main.js, index.html, projects.html</files>
  <action>
    **main.css:**
    - Define `.reveal-hidden`: `opacity: 0; transform: translateY(30px); transition: all 0.8s ease-out;`.
    - Define `.reveal-visible`: `opacity: 1; transform: translateY(0);`.
    
    **js/main.js:**
    - Create a `scrollReveal` IntersectionObserver.
    - Set standard options (threshold ~0.15).
    
    **HTML Files:**
    - Apply `.reveal-hidden` to every `<section>` and card container.
  </action>
  <verify>Refresh the page and scroll down — sections should slide/fade up as they enter the viewport.</verify>
  <done>
    - All sections animate on scroll.
  </done>
</task>

## Success Criteria
- [ ] Navbar "Projects" correctly active on the projects page.
- [ ] All sections reveal smoothly on scroll.
- [ ] No layout shift during reveal animations.

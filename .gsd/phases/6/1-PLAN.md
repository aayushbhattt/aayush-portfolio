---
phase: 6
plan: 1
wave: 1
---

# Plan 6.1: High-Viz Polish & Certificates Overhaul

## Objective
Elevate the technical aesthetic by making the grid highly visible, amplifying the profile glow, and transforming certificates into a purely visual "magnifying" gallery.

## Context
- `styles/main.css` — Global grid target
- `styles/about.css` — Profile glow target
- `index.html` — Certificates structure
- `styles/certificates.css` — Certificates gallery target
- `styles/projects.css` — Modal contrast target

## Tasks

<task type="auto">
  <name>Amplify Global Branding (Grid & Glow)</name>
  <files>styles/main.css, styles/about.css</files>
  <action>
    **main.css:**
    - Update `body::before` grid opacity to `0.25`. This makes the "blueprint" grid a major part of the UI.
    
    **about.css:**
    - Update `profileBreathe` keyframes. Increase the glow intensity:
      - 50% state: `box-shadow: 0 0 60px rgba(215, 35, 35, 0.6)`.
    - Ensure L-borders are high contrast.
  </action>
  <verify>Check site visuals — grid should be very prominent. Profile photo should have a heavy red glow pulse.</verify>
  <done>
    - Grid set to 0.25 opacity.
    - Profile glow amplified.
  </done>
</task>

<task type="auto">
  <name>Overhaul Certificates into "Double Scale" Gallery</name>
  <files>index.html, styles/certificates.css</files>
  <action>
    **index.html:**
    - Remove all `.certificate-card__info` (text titles) from the `#certificates` section.
    
    **styles/certificates.css:**
    - **Layout**: Grid with 4-5 columns of smaller thumbnails.
    - **Hover Effect**:
      - `transform: scale(2)`.
      - `z-index: 100` (ensure it pops above headers/navbar).
      - `transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)`.
    - Handle edge cases (prevent scaling certificates from overflowing the screen width).
  </action>
  <verify>Hover over a certificate in index.html — it should grow significantly and overlap its neighbors smoothly.</verify>
  <done>
    - Text titles removed.
    - Double-scale hover interaction live.
  </done>
</task>

<task type="auto">
  <name>Fix Modal Contrast & Scroll Hint</name>
  <files>styles/projects.css, styles/hero.css</files>
  <action>
    **projects.css (Modal):**
    - Brighten `.modal .tag` and `.modal .btn-primary` colors to ensure they are vivid against the dark backdrop.
    
    **hero.css (Scroll Hint):**
    - Debug the scroll hint animation. Ensure it is visible and has a smooth loop.
  </action>
  <verify>Open a project modal — verify red elements are easy to see. Check hero scroll hint.</verify>
  <done>
    - Modal contrast improved.
    - Scroll hint fixed.
  </done>
</task>

## Success Criteria
- [ ] Global grid is a defining visual feature (0.25 opacity).
- [ ] Certificates scale to double size on hover.
- [ ] Modal elements have high contrast.

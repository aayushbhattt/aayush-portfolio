---
phase: 5
plan: 2
wave: 1
---

# Plan 5.2: Standalone Projects Setup & Filtering

## Objective
Build the `/projects` page interface with pill-shaped tech filters to dynamically sort the project cards.

## Context
- `projects.html`
- `styles/projects.css`
- `js/projects-filter.js`

## Tasks

<task type="auto">
  <name>Build Filter UI and Base Grid</name>
  <files>projects.html, styles/projects.css</files>
  <action>
    **projects.html:**
    - Inside `.projects-page .container`:
      - Add a `<div class="projects-filter">`.
      - Add filter pill buttons: `All`, `React`, `Vanilla JS`, `Firebase`, `AI`.
      - Add `<div class="projects__grid" id="allProjectsGrid">`.

    **styles/projects.css:**
    - Style `.projects-filter` as a row of `.tag`-like pill buttons.
    - Active pill should be highlighted (e.g. solid red background).
    - Ensure `.projects__grid` layout matches the homepage layout but allows for a larger, detailed view (since we'll add Modals in Plan 5.3).
  </action>
  <verify>Check projects.html — the filter row should be visible above an empty grid.</verify>
  <done>Filter pills styled and present.</done>
</task>

<task type="auto">
  <name>Implement Vanilla JS Filter Logic</name>
  <files>js/projects-filter.js</files>
  <action>
    - Create the script.
    - Add event listeners to `.projects-filter button`.
    - When clicked, update the `.active` class on the clicked button.
    - Read the `data-filter` attribute of the button.
    - Iterate over all `.project-card` inside `#allProjectsGrid` and set `display: none` or apply a `.hidden` class to cards that do not match the selected filter.
    - Ensure smooth transitions if possible (e.g., using opacity/scale).
  </action>
  <verify>Check script logic conceptually — it must handle `data-category` matching.</verify>
  <done>Filtering logic implemented and ready to receive cards.</done>
</task>

## Success Criteria
- [ ] User can click filter pills to toggle categories.
- [ ] Active filter is clearly indicated.

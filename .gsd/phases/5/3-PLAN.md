---
phase: 5
plan: 3
wave: 2
---

# Plan 5.3: Project Cards & Detail Modal

## Objective
Populate the projects gallery and build the interactive popup modal to display rich project details without leaving the page.

## Context
- `projects.html`
- `styles/projects.css`
- `.gsd/SPEC.md` — Project content

## Tasks

<task type="auto">
  <name>Populate All Project Cards in Gallery</name>
  <files>projects.html</files>
  <action>
    - Insert 4 `.project-card` elements into `#allProjectsGrid`.
    - Apply appropriate `data-category` attributes to each:
      1. Study Buddy: `react, ai, firebase`
      2. Money Manage: `vanilla, firebase`
      3. Image Quiz: `vanilla, firebase`
      4. VST Admin: `react, firebase`
    - Make sure the cards are slightly larger than the homepage ones (via `projects.css` adjustments).
    - Add a "View Details" trigger (button or whole card click) to each card.
  </action>
  <verify>Check projects.html — all 4 projects should render and respond to the filter buttons created in 5.2.</verify>
  <done>Cards are visible and filterable.</done>
</task>

<task type="auto">
  <name>Build Project Detail Modal</name>
  <files>projects.html, styles/projects.css, js/projects-filter.js</files>
  <action>
    **projects.html:**
    - Place `<div id="projectModal" class="modal hidden">` at the bottom of `<body>`.
    - Modal content structure: Close button, large image, title, tech tags, deep description, and links.

    **styles/projects.css:**
    - Style `.modal` as a fixed full-screen overlay with a translucent backdrop (e.g., `background: rgba(0,0,0,0.8)`).
    - Style the `.modal__content` as a centered card with max-width.
    - Add a `.no-scroll` class for the `body` (to prevent scrolling behind the modal).

    **js/projects-filter.js:**
    - Attach event listeners to project cards to open the modal.
    - Inject specific project data into the modal DOM elements based on which card was clicked.
    - Handle closing the modal via the close button, hitting the ESC key, or clicking outside the modal content.
  </action>
  <verify>Click a project card in the browser — the modal should appear, trap scroll, display correct data, and close gracefully.</verify>
  <done>Modal opens, displays rich data, closes, and locks body scroll.</done>
</task>

## Success Criteria
- [ ] All 4 projects are on the `/projects` page.
- [ ] Clicking a project opens a detailed modal.
- [ ] The user cannot scroll the main page while the modal is open.

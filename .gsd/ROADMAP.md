# ROADMAP.md

> **Current Phase**: Phase 1 — Not Started
> **Milestone**: v1.0 — Portfolio Launch

---

## Must-Haves (from SPEC)

- [ ] Sticky navbar with all section links
- [ ] Hero with typewriter effect and CTA
- [ ] About section with profile photo
- [ ] Skills grouped by category with badge cards
- [ ] 3 featured projects on main page with live + GitHub links
- [ ] Full projects page (`projects.html`) with tech filters
- [ ] Achievements section (leadership + beyond tech)
- [ ] Contact section with email + social icon links
- [ ] Fully responsive (mobile + desktop)
- [ ] Deployed and publicly accessible

---

## Phases

### Phase 1: Foundation & Design System
**Status**: ⬜ Not Started
**Objective**: Set up the project structure, global CSS design system, and build the sticky Navbar + Hero section. This is the first impression — nail the look and feel here.

**Deliverables:**
- `index.html` — base HTML shell
- `styles/main.css` — full design system (variables, reset, typography, utilities)
- `styles/navbar.css` — sticky navbar styles
- `styles/hero.css` — hero section styles
- `js/main.js` — typewriter effect + navbar scroll behavior
- `assets/images/profile.jpg` — profile photo in place

**Requirements:** Design tokens, color palette, fonts loaded, navbar functional, hero rendering with typewriter

---

### Phase 2: About, Skills & Projects (Main Page)
**Status**: ⬜ Not Started
**Objective**: Build the About, Skills, and Projects sections on the main page. Projects show 3 featured cards with tags, live links, and GitHub links.

**Deliverables:**
- `styles/about.css`
- `styles/skills.css`
- `styles/projects.css`
- `js/projects-data.js` — project data as JS object (single source of truth)
- About section with two-column layout (photo + bio)
- Skills section with grouped badge cards and icons
- Projects section with 3 featured cards + "View All" button

**Requirements:** All content sections visible, skill badges grouped properly, project cards link correctly

---

### Phase 3: Achievements & Contact
**Status**: ⬜ Not Started
**Objective**: Build the Achievements section (leadership + beyond tech) and the Contact section (email + social icon links). Complete the main page.

**Deliverables:**
- `styles/achievements.css`
- `styles/contact.css`
- Achievements rendered as card/timeline grid
- Contact section with email mailto link + GitHub icon + LinkedIn icon
- Footer with name + year

**Requirements:** Main page fully complete end-to-end, all links working, footer in place

---

### Phase 4: Certificates
**Status**: ⬜ Not Started
**Objective**: Build a "Certificates" category section after Achievements to showcase technical certifications and course completions.

**Deliverables:**
- `styles/certificates.css`
- Certificate cards with gallery view or grid.

---

### Phase 5: Projects Page (/projects)
**Status**: ⬜ Not Started
**Objective**: Build the standalone `projects.html` page with all 4 projects, filterable by tech tag. Linked from "View All Projects" button on main page.

**Deliverables:**
- `projects.html` — full projects gallery page
- `styles/projects-page.css`
- `js/projects-filter.js` — filter logic by tech tag
- All 4 projects displayed with tech tags, live links, GitHub links, thumbnails/screenshots

**Requirements:** Filter works for at least: All, React, Firebase, HTML/JS/CSS. "Back to Home" nav working.

---

### Phase 6: Animations, Polish & Deploy
**Status**: ⬜ Not Started
**Objective**: Add scroll-triggered fade-in animations, hover effects, mobile responsiveness polish, SEO meta tags, and deploy to Netlify or GitHub Pages.

**Deliverables:**
- `js/animations.js` — IntersectionObserver scroll fade-ins
- Hover effects on all cards and buttons
- Mobile responsive breakpoints (375px, 768px, 1440px)
- SEO meta tags (title, description, OG tags)
- Lighthouse score checked
- Site live on public URL

**Requirements:** All success criteria from SPEC.md checked off. Deployed link working.
### Phase 7: Site Consolidation
Merge all project content into the main page, unify styles/logic, and remove standalone subpages.

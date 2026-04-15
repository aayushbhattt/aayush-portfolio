# SPEC.md — Project Specification

> **Status**: `FINALIZED`

## Vision

A clean, dark, tech-aesthetic personal portfolio for Aayush Bhatt — a full-stack developer and B.Tech CSE (AI/ML) student — built to secure internships and establish personal branding. The site will be a single scrollable main page with a `/projects` sub-page, built entirely in vanilla HTML, CSS, and JavaScript, no frameworks. It should feel premium, fast, and memorable.

---

## Goals

1. **Internship-ready presentation** — showcase projects, skills, and achievements in a way that impresses recruiters at a glance
2. **Personal brand** — unique identity using the red-black color palette; feels distinct, not generic
3. **Fast & lightweight** — vanilla stack, no build tools, deploys instantly to Netlify/GitHub Pages

---

## Non-Goals (Out of Scope)

- No backend or database
- No blog (may add later)
- No resume download page or embedded PDF viewer
- No contact form — just direct email link + social icon links
- No CGPA display (keep subtle / skip entirely)
- No Next.js, React, or any framework

---

## Users

**Primary:** Tech recruiters and internship hiring managers scanning for full-stack developers. They spend < 30 seconds deciding — the hero must hook them instantly.

**Secondary:** Peers, seniors, and networking contacts who stumble on the site from LinkedIn/GitHub.

---

## Personal Info

| Field | Value |
|---|---|
| **Name** | Aayush Bhatt |
| **Location** | Pune, Maharashtra, IN |
| **Email** | aayushbhatt0210@gmail.com |
| **Phone** | +91-9311578334 |
| **LinkedIn** | https://www.linkedin.com/in/aayushbhattt/ |
| **GitHub** | https://github.com/aayushbhattt |
| **Education** | B.Tech CSE (AI/ML), Vedam School of Technology, Batch 2025–2029 |
| **Profile Photo** | `assets/images/profile.jpg` (hackathon trophy photo — supplied) |

---

## Design System

| Token | Value |
|---|---|
| **Background** | `#000000` |
| **Secondary BG / Cards** | `#3E3636` |
| **Accent (Red)** | `#D72323` |
| **Primary Text** | `#F5EDED` |
| **Secondary Text** | `#a09898` |
| **Body Font** | Inter (Google Fonts) |
| **Code/Tag Font** | Fira Code (Google Fonts) |
| **Border Radius** | 8px (cards), 4px (tags) |
| **Animation Style** | Subtle — fade-in on scroll, hover lifts, typewriter on hero |

---

## Pages & Sections

### Main Page (Single Scroll)
1. **Navbar** — Sticky, Logo/Name, links: About · Skills · Projects · Achievements · Contact
2. **Hero** — "Hi, I'm Aayush Bhatt" + typewriter (Full Stack Developer · AI Enthusiast · Problem Solver) + CTA: "View Projects"
3. **About** — Two-column: profile photo (left) + bio text with Taekwondo personality touch (right)
4. **Skills** — Grouped badge cards: Languages, Frameworks, Databases, Tools
5. **Projects** — 3 featured project cards + "View All Projects" → `/projects`
6. **Achievements** — Timeline/card grid: Leadership + Beyond Tech
7. **Contact** — Email link + GitHub + LinkedIn icons. That's it.

### Sub-page: /projects (projects.html)
- Full gallery of all 4 projects
- Filter by tech (React, Firebase, HTML/CSS/JS, etc.)

---

## Projects Data

| # | Name | Tech Tags | GitHub | Live | Feature |
|---|---|---|---|---|---|
| 1 | **Study Buddy** | React, Firebase, Gemini AI, Vite | [github](https://github.com/aayushbhattt/Study_Buddy) | [live](https://studybuddytest12.netlify.app/) | 🏆 Hackathon Winner |
| 2 | **Money Manage** | HTML, CSS, JS, Chart.js, Firebase | [github](https://github.com/aayushbhattt/Money-Tracker) | [live](https://moneytracker207.netlify.app/) | 50+ records, multi-device sync |
| 3 | **Image Quiz App** | HTML, CSS, JS, Firebase | [github](https://github.com/aayushbhattt/Fun-Quiz) | [live](https://fun-quiz-aayush.netlify.app/) | Real-time leaderboard |
| 4 | **VST OpenSource Admin** | React, Firebase, GitHub API | [github](https://github.com/vstopensource-gif/Vedam-OpenSource-Admin) | — | 200 DAU, CI/CD |

**Featured on main page (top 3):** VST Admin, Study Buddy, Money Manage

---

## Achievements Data

**Leadership:**
- 🏅 President — Competitive Code Club, Vedam School of Technology
- 🎪 Core Committee / Events Head — Noesis Tech Fest
- 🥈 2nd Place — InnoveDAM 24-Hour Hackathon (24 teams)

**Technical:**
- 💻 67+ problems solved on LeetCode

**Beyond Tech:**
- 🥋 Black Belt in Taekwondo
- 🏟️ Competed District → State level

---

## Constraints

- **Tech:** HTML + CSS + JS only (vanilla). No frameworks, no build step.
- **Deploy:** Netlify or GitHub Pages — free tier.
- **Performance:** Must score well on Lighthouse (no heavy libs)
- **Responsive:** Mobile-first design

---

## Success Criteria

- [ ] Portfolio loads in under 2 seconds
- [ ] All 6 main sections present and scrollable
- [ ] `/projects` page loads with working tech filters
- [ ] All project cards have working Live + GitHub links
- [ ] Contact section has working email + social icon links
- [ ] Fully responsive on mobile (375px) and desktop (1440px)
- [ ] Typewriter effect working in Hero
- [ ] Scroll-triggered fade-in animations on sections
- [ ] Deployed and live on a public URL

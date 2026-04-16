/* ============================================================
   main.js — Entry Point
   Aayush Bhatt Portfolio
   ============================================================ */

'use strict';

/* ─── 1. Navbar Scroll Effect ─── */
const navbar = document.getElementById('navbar');

if (navbar) {
  const handleNavbarScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  };

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  // Run once on load in case page is already scrolled
  handleNavbarScroll();
}

/* ─── 2. Mobile Hamburger Toggle ─── */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    // Prevent body scroll when menu is open
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
}

/* ─── 3. Active Nav Link (Scroll & Path) ─── */
const sections = document.querySelectorAll('section[id]');
const navItems  = document.querySelectorAll('.navbar__links .nav-link');

function updateActiveNavItem() {
  // Homepage Scroll Detection
  if (sections.length && navItems.length) {
    let currentSectionId = '';
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
      if (scrollPos >= section.offsetTop) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navItems.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  }
}

window.addEventListener('scroll', updateActiveNavItem, { passive: true });
updateActiveNavItem();

/* ─── 3.5. Scroll Reveal Observer ─── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Reveal Animations
  document.querySelectorAll('.reveal-hidden').forEach(el => {
    revealObserver.observe(el);
  });

  /* ─── 4. Project Modal Logic ─── */
  const modal = document.getElementById('projectModal');
  const modalClose = document.getElementById('modalClose');
  const modalBackdrop = document.getElementById('modalBackdrop');
  
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalTech = document.getElementById('modalTech');
  const modalLinks = document.getElementById('modalLinks');

  const projectDetails = {
    'Study Buddy': {
      desc: `Study Buddy is a comprehensive AI Code Review & Practice Platform. It features a browser-based execution environment powered by the Piston API, allowing users to write and run Java code directly in the browser. <br><br>The core innovation is the integration with Gemini AI which provides automated, contextual code review and feedback. It also includes real-time multiplayer progress tracking and customizable quizzes. Built during the InnoVedam 24-hour Hackathon, where it secured 2nd place.`,
      links: `<a href="https://github.com/aayushbhattt/Study_Buddy" target="_blank" class="btn-outline">GitHub Repo ↗</a>`
    },
    'Money Manage': {
      desc: `Money Manage is a robust personal expense tracking application. Designed with a mobile-first approach, it provides seamless full CRUD operations across over 50 transaction records.<br><br>The application utilizes Firebase Firestore to enable real-time synchronization across multiple devices. It also features interactive analytics dashboards built with Chart.js to help users visualize their spending patterns.`,
      links: `
        <a href="https://github.com/aayushbhattt/Money-Tracker" target="_blank" class="btn-outline">GitHub Repo ↗</a>
        <a href="https://moneytracker207.netlify.app/" target="_blank" class="btn-primary">Live Demo ↗</a>
      `
    },
    'Image Quiz Application': {
      desc: `Developed as a real-time event platform, the Image Quiz Application was successfully deployed handling 10+ concurrent participants in a live environment.<br><br>It uses Firebase to maintain a dynamic, live leaderboard that updates scoring instantly. The system includes an admin control dashboard to manage quiz flow and user registrations seamlessly.`,
      links: `<a href="https://github.com/aayushbhattt/image-quiz" target="_blank" class="btn-outline">GitHub Repo ↗</a>`
    },
    'VST OpenSource Admin': {
      desc: `An administrative dashboard designed to manage open-source contributions for the Vedam School of Technology organization.<br><br>This project implements deep integration with the GitHub API to track pull requests, manage issues, and automate CI/CD pipelines. It provides maintainers with a centralized hub to review open-source health metrics and contributor activity.`,
      links: `<a href="https://github.com/aayushbhattt/vst-admin" target="_blank" class="btn-outline">GitHub Repo ↗</a>`
    }
  };

  const projectCards = document.querySelectorAll('.project-card');

  projectCards.forEach(card => {
    const openCardModal = () => {
      const title = card.querySelector('.project-card__title').innerText;
      const techTags = card.querySelector('.project-card__tech').innerHTML;
      const details = projectDetails[title];
      
      if (details) {
        modalTitle.innerText = title;
        modalTech.innerHTML = techTags;
        modalDesc.innerHTML = details.desc;
        modalLinks.innerHTML = details.links;
        
        modal.classList.remove('hidden');
        document.body.classList.add('no-scroll');
        setTimeout(() => modalClose.focus(), 50);
      }
    };

    card.addEventListener('click', openCardModal);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openCardModal();
      }
    });
    card.style.cursor = 'pointer';
  });

  const closeModal = () => {
    modal.classList.add('hidden');
    document.body.classList.remove('no-scroll');
  };

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
});

/* ─── 4. Typewriter Effect ─── */
const typeEl = document.getElementById('typewriterText');

if (typeEl) {
  const phrases = [
    'Full Stack Developer',
    'AI Enthusiast',
    'Problem Solver',
  ];

  let phraseIndex = 0;
  let charIndex   = 0;
  let isDeleting  = false;

  function typeWriter() {
    const currentPhrase = phrases[phraseIndex];
    const displayed = currentPhrase.substring(0, charIndex);
    typeEl.textContent = displayed;

    let delay = isDeleting ? 55 : 95;

    if (!isDeleting && charIndex === currentPhrase.length) {
      // Pause at end of phrase before deleting
      delay = 1800;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      // Move to next phrase
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      delay = 350;
    }

    charIndex += isDeleting ? -1 : 1;
    setTimeout(typeWriter, delay);
  }

  // Small delay before starting so hero animations play first
  setTimeout(typeWriter, 1000);
}

/* Section navigation is now handled by default browser behavior (instant jump) */

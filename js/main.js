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
  const currentPath = window.location.pathname;
  const isProjectsPage = currentPath.includes('projects.html');
  
  // 1. Handle Standalone Pages (Projects)
  if (isProjectsPage) {
    navItems.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === 'projects.html') {
        link.classList.add('active');
      }
    });
    return;
  }

  // 2. Handle Homepage Scroll Detection
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
  document.querySelectorAll('.reveal-hidden').forEach(el => {
    revealObserver.observe(el);
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

/* ─── 5. Smooth Scroll for anchor links ─── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = parseInt(
        getComputedStyle(document.documentElement)
          .getPropertyValue('--navbar-height') || '70',
        10
      );
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

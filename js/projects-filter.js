/**
 * projects-filter.js
 * Handles filtering logic and modal popups for the Projects Page.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Filtering Logic
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      // Add active class to clicked button
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      // Filter projects
      projectCards.forEach(card => {
        const categories = card.getAttribute('data-category').split(' ');
        
        if (filterValue === 'all' || categories.includes(filterValue)) {
          card.classList.remove('hidden-card');
        } else {
          card.classList.add('hidden-card');
        }
      });
    });
  });

  // 2. Modal Logic
  const modal = document.getElementById('projectModal');
  const modalClose = document.getElementById('modalClose');
  const modalBackdrop = document.getElementById('modalBackdrop');
  
  // Modal DOM elements to inject data into
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalTech = document.getElementById('modalTech');
  const modalLinks = document.getElementById('modalLinks');

  // Hardcoded detailed data for the modal based on project titles
  const projectDetails = {
    'Study Buddy': {
      desc: `Study Buddy is a comprehensive AI Code Review & Practice Platform. It features a browser-based execution environment powered by the Piston API, allowing users to write and run Java code directly in the browser. <br><br>The core innovation is the integration with Gemini AI which provides automated, contextual code review and feedback. It also includes real-time multiplayer progress tracking and customizable quizzes. Built during the InnoVedam 24-hour Hackathon, where it secured 2nd place.`,
      links: `
        <a href="https://github.com/aayushbhattt/Study-Buddy" target="_blank" class="btn-outline">GitHub Repo ↗</a>
      `
    },
    'Money Manage': {
      desc: `Money Manage is a robust personal expense tracking application. Designed with a mobile-first approach, it provides seamless full CRUD operations across over 50 transaction records.<br><br>The application utilizes Firebase Firestore to enable real-time synchronization across multiple devices. It also features interactive analytics dashboards built with Chart.js to help users visualize their spending patterns and make informed financial decisions.`,
      links: `
        <a href="https://github.com/aayushbhattt/Money-Tracker" target="_blank" class="btn-outline">GitHub Repo ↗</a>
        <a href="https://moneytracker207.netlify.app/" target="_blank" class="btn-primary">Live Demo ↗</a>
      `
    },
    'Image Quiz Application': {
      desc: `Developed as a real-time event platform, the Image Quiz Application was successfully deployed handling 10+ concurrent participants in a live environment.<br><br>It uses Firebase to maintain a dynamic, live leaderboard that updates scoring instantly. The system includes an admin control dashboard to manage quiz flow and user registrations seamlessly.`,
      links: `
        <a href="https://github.com/aayushbhattt/image-quiz" target="_blank" class="btn-outline">GitHub Repo ↗</a>
      `
    },
    'VST OpenSource Admin': {
      desc: `An administrative dashboard designed to manage open-source contributions for the Vedam School of Technology organization.<br><br>This project implements deep integration with the GitHub API to track pull requests, manage issues, and automate CI/CD pipelines. It provides maintainers with a centralized hub to review open-source health metrics and contributor activity.`,
      links: `
        <a href="https://github.com/aayushbhattt/vst-admin" target="_blank" class="btn-outline">GitHub Repo ↗</a>
      `
    }
  };

  // Open modal
  projectCards.forEach(card => {
    const openCardModal = () => {
      // Extract data from the card
      const title = card.querySelector('.project-card__title').innerText;
      const techTags = card.querySelector('.project-card__tech').innerHTML; // preserve pill formatting
      
      // Look up detailed data
      const details = projectDetails[title];
      
      if (details) {
        modalTitle.innerText = title;
        modalTech.innerHTML = techTags;
        modalDesc.innerHTML = details.desc;
        modalLinks.innerHTML = details.links;
        
        // Show modal and prevent bg scrolling
        modal.classList.remove('hidden');
        document.body.classList.add('no-scroll');
        
        // Shift focus to modal close button for accessibility
        setTimeout(() => modalClose.focus(), 50);
      }
    };

    card.addEventListener('click', openCardModal);

    // Keyboard support
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openCardModal();
      }
    });

    // Make cards appear clickable
    card.style.cursor = 'pointer';
  });

  // Close modal function
  const closeModal = () => {
    modal.classList.add('hidden');
    document.body.classList.remove('no-scroll');
  };

  modalClose.addEventListener('click', closeModal);
  modalBackdrop.addEventListener('click', closeModal);

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
});

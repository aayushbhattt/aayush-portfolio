/* ============================================================
   cursor.js — Custom Laser Cursor Logic
   ============================================================ */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.getElementById('customCursor');
  if (!cursor) return;

  // Hide cursor if mouse leaves window
  document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
  });

  document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
  });

  // Update cursor position
  document.addEventListener('mousemove', (e) => {
    // We use translate(-50%, -50%) in CSS to center the dot on the coordinates
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });

  // Select all interactive elements and more divs
  const interactiveSelectors = 'a, button, input, textarea, select, label, .project-card, [role="button"], [tabindex], .card, .tag, .achievement-card, .certificate-card, img, h1, h2, h3';
  
  const setupInteractiveElements = () => {
    const interactives = document.querySelectorAll(interactiveSelectors);
    
    interactives.forEach(el => {
      // Prevent attaching multiple listeners if function is re-run
      if (el.dataset.cursorAttached) return;
      el.dataset.cursorAttached = 'true';

      el.addEventListener('mouseenter', () => {
        cursor.classList.add('hovering');
      });
      
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hovering');
      });
    });
  };

  setupInteractiveElements();

  // Re-run setup if DOM changes (e.g., dynamic elements)
  const observer = new MutationObserver(() => {
    setupInteractiveElements();
  });
  observer.observe(document.body, { childList: true, subtree: true });
});

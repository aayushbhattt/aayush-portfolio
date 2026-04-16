# Debug Session: Phase 6 Polish Issues

## Symptom
1. Scroll hint animation is "breathing" (pulsing) and doesn't feel like a scroll indicator.
2. Certificates gallery hasn't changed enough; cards are too big and the magnification isn't dramatic.

## Resolution

**Root Cause:** 
- Scroll hint animation was horizontal and pulsating, which felt like "breathing" and didn't clearly indicate scrolling.
- Certificates were 4-column grid items, making them too large to look like a gallery, and the 2x scale was not dramatic enough.

**Fix:** 
- **Redesigned Scroll Hint**: Changed to a vertical line with a sliding "white trace" animation that moves downward. This clearly indicates the scroll action.
- **Redesigned Certificates**: Switched to a centered flexbox gallery with smaller 150px thumbnails. Increased hover magnification to **2.5x** size for a powerful visual pop.

**Verified:** 
- CSS logic checked for overflow and z-index layering.
- Mobile scale set to 1.8x to maintain usability.

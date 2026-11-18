'use strict';

(function () {
  // ── Carousel Controls (Smooth Horizontal Track Scroll) ──
  const track = document.getElementById('track');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');

  if (track && prevBtn && nextBtn) {
    const getScrollStep = () => {
      const card = track.querySelector('.card');
      return card ? card.offsetWidth + 28 : 420;
    };

    prevBtn.addEventListener('click', () => {
      track.scrollBy({ left: -getScrollStep(), behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
      track.scrollBy({ left: getScrollStep(), behavior: 'smooth' });
    });
  }

  // ── Smooth Anchor Scrolling ──
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
})();

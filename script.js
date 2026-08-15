'use strict';

(function () {

  // ── Mobile navigation toggle ──────────────────────────────────────
  var navToggle = document.querySelector('.nav-toggle');
  var navMenu   = document.querySelector('.nav-links');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      var open = navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
      navToggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    });

    navMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Open navigation menu');
      });
    });

    document.addEventListener('click', function (e) {
      if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.focus();
      }
    });
  }

  // ── Active nav link on scroll ─────────────────────────────────────
  var sections = document.querySelectorAll('section[id], header[id]');
  var navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  function setActiveLink() {
    var current = '';
    sections.forEach(function (sec) {
      if (window.scrollY + 110 >= sec.offsetTop) current = sec.id;
    });
    navLinks.forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }
  window.addEventListener('scroll', setActiveLink, { passive: true });
  setActiveLink();

  // ── Smooth scroll (respects prefers-reduced-motion) ───────────────
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'start' });
      }
    });
  });

  // ── Back to top ────────────────────────────────────────────────────
  var backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', function () {
      var show = window.scrollY > 400;
      backToTop.classList.toggle('show', show);
      backToTop.hidden = !show;
    }, { passive: true });
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' });
    });
  }

  // ── Theme toggle (light default, optional ink-dark) ────────────────
  var themeToggle = document.getElementById('themeToggle');
  var rootEl = document.documentElement;

  if (themeToggle) {
    var stored = localStorage.getItem('theme');
    if (stored === 'dark') rootEl.setAttribute('data-theme', 'dark');

    function syncToggle() {
      var isDark = rootEl.getAttribute('data-theme') === 'dark';
      themeToggle.setAttribute('aria-pressed', String(isDark));
      themeToggle.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
    }

    themeToggle.addEventListener('click', function () {
      var next = rootEl.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      if (next === 'light') rootEl.removeAttribute('data-theme');
      else rootEl.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', next);
      syncToggle();
    });

    syncToggle();
  }

  // ── Scroll-in animation ───────────────────────────────────────────
  var animTargets = document.querySelectorAll(
    '.summary, .skill-card, .project, .exp-card, .edu-card, .cert-card, ' +
    '.wf-step, .strength, .resume-card, .repo-card, .contact-card, .hero-stats, .hero-quote'
  );

  if ('IntersectionObserver' in window && !prefersReduced) {
    animTargets.forEach(function (el) { el.classList.add('fade-up'); });
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    animTargets.forEach(function (el) { observer.observe(el); });
  }

})();

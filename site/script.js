// =====================================================
// MENU MOBILE
// =====================================================
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', isOpen);
    menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  });
}

// =====================================================
// ANO DINÂMICO NO FOOTER
// =====================================================
const anoEl = document.getElementById('ano');
if (anoEl) anoEl.textContent = new Date().getFullYear();

// =====================================================
// HEADER: estado .scrolled (bordô) quando o hero sai de vista
// =====================================================
const header = document.querySelector('.site-header');
const hero = document.querySelector('.hero');

if (header && hero) {
  const headerObserver = new IntersectionObserver(
    ([entry]) => {
      header.classList.toggle('scrolled', !entry.isIntersecting);
    },
    { threshold: 0, rootMargin: '-80px 0px 0px 0px' }
  );
  headerObserver.observe(hero);
}

// =====================================================
// SMOOTH SCROLL MANUAL (requestAnimationFrame)
// Anima a posição de scroll por conta própria — ignora a preferência
// "reduzir movimento" do SO, que normalmente força scroll instantâneo.
// =====================================================
const HEADER_OFFSET = 80;
const SCROLL_DURATION = 850; // ms

// easeInOutCubic — começa devagar, acelera, desacelera
function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

let scrollAnimationId = null;

function animatedScrollTo(targetY) {
  // Cancela animação anterior se o usuário clicar de novo
  if (scrollAnimationId) cancelAnimationFrame(scrollAnimationId);

  const startY = window.pageYOffset;
  const distance = targetY - startY;
  if (Math.abs(distance) < 2) return;

  let startTime = null;

  function step(timestamp) {
    if (startTime === null) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / SCROLL_DURATION, 1);
    const eased = easeInOutCubic(progress);

    window.scrollTo(0, startY + distance * eased);

    if (progress < 1) {
      scrollAnimationId = requestAnimationFrame(step);
    } else {
      scrollAnimationId = null;
    }
  }

  scrollAnimationId = requestAnimationFrame(step);
}

function getTargetY(selector) {
  if (selector === '#topo' || selector === '#') return 0;
  const target = document.querySelector(selector);
  if (!target) return null;
  return Math.max(0, target.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET);
}

// Event delegation: pega cliques em qualquer link âncora (header, footer, logo, CTAs)
document.addEventListener('click', (e) => {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;

  const href = link.getAttribute('href');
  if (!href || href.length < 2) return;

  const targetY = getTargetY(href);
  if (targetY === null) return;

  e.preventDefault();
  animatedScrollTo(targetY);

  // Fecha o menu mobile se estiver aberto
  if (mainNav && mainNav.classList.contains('open')) {
    mainNav.classList.remove('open');
    if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
  }

  if (document.activeElement && document.activeElement.blur) {
    document.activeElement.blur();
  }
});

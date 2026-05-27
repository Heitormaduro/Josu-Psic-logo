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
// SMOOTH SCROLL — handler manual robusto (sem depender só do CSS)
// =====================================================
const HEADER_OFFSET = 80;

function smoothScrollTo(targetSelector) {
  if (targetSelector === '#topo' || targetSelector === '#') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return true;
  }
  const target = document.querySelector(targetSelector);
  if (!target) return false;
  const top = target.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;
  window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  return true;
}

// Aplica em TODOS os links âncora (header, footer, logo, CTAs internas)
document.addEventListener('click', (e) => {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;
  const href = link.getAttribute('href');
  if (!href || href.length < 2) return;
  if (smoothScrollTo(href)) {
    e.preventDefault();
    // Fecha menu mobile se aberto
    if (mainNav && mainNav.classList.contains('open')) {
      mainNav.classList.remove('open');
      if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
    }
    if (document.activeElement && document.activeElement.blur) {
      document.activeElement.blur();
    }
  }
});

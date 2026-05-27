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
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
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
// SCROLL REVEAL — inline styles (estratégia simples e confiável)
// =====================================================
const REVEAL_SELECTORS = [
  '.section-title',
  '.section-sub',
  '.section .eyebrow',
  '.feature-card',
  '.contato-card',
  '.card-split',
  '.quiet-quote',
  '.local-info',
  '.local-map',
  '.two-col > div'
].join(', ');

const revealEls = document.querySelectorAll(REVEAL_SELECTORS);

// Estado inicial: invisível + deslocado para baixo
revealEls.forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(40px)';
  el.style.transition = 'opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1), transform 0.9s cubic-bezier(0.22, 1, 0.36, 1)';

  // Stagger entre cards irmãos
  const parent = el.parentElement;
  if (parent) {
    const siblingCards = Array.from(parent.children).filter(c =>
      c.classList.contains('feature-card') || c.classList.contains('contato-card')
    );
    if (siblingCards.length > 1) {
      const idx = siblingCards.indexOf(el);
      if (idx > -1) el.style.transitionDelay = `${idx * 0.09}s`;
    }
  }
});

const revealEl = (el) => {
  el.style.opacity = '1';
  el.style.transform = 'translateY(0)';
};

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          revealEl(entry.target);
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
  );
  revealEls.forEach(el => revealObserver.observe(el));
} else {
  // Fallback: browsers antigos sem IntersectionObserver
  revealEls.forEach(revealEl);
}

// Safety net: força tudo visível após 3s se algo travar
setTimeout(() => {
  revealEls.forEach(el => {
    if (el.style.opacity === '0') revealEl(el);
  });
}, 3000);

// =====================================================
// SMOOTH SCROLL ao clicar em link âncora (backup do CSS nativo)
// =====================================================
const HEADER_OFFSET = 80;

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (!href || href === '#') return;

    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });

    // Desfoca o link pra não destacar após o scroll
    if (document.activeElement) document.activeElement.blur();
  });
});

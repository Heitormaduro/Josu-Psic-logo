// Menu mobile
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', isOpen);
    menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  });

  // Fecha ao clicar em link
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Ano dinâmico no footer
const anoEl = document.getElementById('ano');
if (anoEl) anoEl.textContent = new Date().getFullYear();

// Header switcha pra estado .scrolled (bordô) quando o hero sai de vista
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

// Reveal on scroll — adiciona classe .in-view (CSS cuida da transição)
const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14, rootMargin: '0px 0px -60px 0px' }
);

// Seletor amplo: títulos, subtítulos, eyebrows, cards e blocos de conteúdo
const animatedSelectors = [
  '.section-title',
  '.section-sub',
  '.section .eyebrow',
  '.feature-card',
  '.contato-card',
  '.card-split',
  '.quiet-quote',
  '.local-info',
  '.local-map',
  '.two-col > div',
  '.ghost-text'
].join(', ');

document.querySelectorAll(animatedSelectors).forEach(el => {
  el.classList.add('fade-up');

  // Stagger entre irmãos do mesmo container (cards em grid, contato cards, etc)
  const parent = el.parentElement;
  if (parent) {
    const sameTypeSiblings = Array.from(parent.children).filter(c =>
      c.classList.contains('feature-card') ||
      c.classList.contains('contato-card')
    );
    if (sameTypeSiblings.length > 1) {
      const idx = sameTypeSiblings.indexOf(el);
      if (idx > -1) {
        el.style.setProperty('--anim-delay', `${idx * 0.09}s`);
      }
    }
  }

  revealObserver.observe(el);
});

// Fecha menu mobile ao clicar em link âncora (smooth scroll é nativo via CSS)
// e desfaz o foco pra não destacar o link após o scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', () => {
    if (document.activeElement) document.activeElement.blur();
  });
});

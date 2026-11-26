/* YD Sécurité : animations GSAP (ScrollTrigger + SplitText).
   Le site est rendu par le routeur (main.innerHTML) : on reconstruit les animations
   à chaque rendu de page et on annule les précédentes. Rien n'est animé si
   l'utilisateur a demandé à réduire les animations. */
(() => {
  const main = document.querySelector('main');
  if (!main || !window.gsap || !window.ScrollTrigger) return;
  const plugins = [ScrollTrigger];
  if (window.SplitText) plugins.push(SplitText);
  gsap.registerPlugin(...plugins);
  gsap.defaults({ ease: 'power3.out', duration: 0.9 });

  const HERO = '.yd-hp-hero, .yd-home-hero, .yd-service-hero, .yd-v2-title, .yd-title, .yd-ct-title, .yd-contact-head';
  const CARDS = [
    '.yd-hp-service-grid > *', '.yd-hp-case-grid > *', '.yd-hp-voice-grid > *', '.yd-hp-logos > li',
    '.yd-hp-method-step', '[class*="-grid"] > article', '[class*="-cards"] > *', 'article', 'details'
  ].join(',');
  const STATS = '.yd-dark-stats strong, .yd-v2-ref-stats strong, .yd-v2-ref-event-numbers strong';
  const CLEAR = 'transform,opacity,visibility';

  let mm = null;
  let lastHash = null;
  let firstRender = true;

  const notInForm = el => !el.closest('form, fieldset');
  const visible = el => el.offsetParent !== null || getComputedStyle(el).position === 'fixed';

  function heroIntro(root, hero, withHeader) {
    const tl = gsap.timeline({ defaults: { duration: 1 } });
    if (withHeader) {
      const head = root.querySelectorAll('.yd-header > .yd-brand, .yd-main-nav > a, .yd-header-button, .yd-menu');
      tl.from(head, { y: -16, autoAlpha: 0, duration: 0.7, stagger: 0.05, clearProps: CLEAR }, 0);
    }
    if (!hero) return;
    const h1 = hero.querySelector('h1');
    if (h1 && window.SplitText) {
      const split = SplitText.create(h1, { type: 'lines,words', mask: 'lines', linesClass: 'yd-split-line' });
      tl.from(split.words, { yPercent: 110, duration: 1.1, stagger: 0.035, ease: 'power4.out' }, withHeader ? 0.2 : 0);
    } else if (h1) {
      tl.from(h1, { y: 40, autoAlpha: 0, clearProps: CLEAR }, 0.1);
    }
    const copy = [...hero.querySelectorAll('h1 ~ p, h1 ~ div p, .yd-hp-hero-actions > *, h1 ~ .yd-button, h1 ~ div .yd-button')]
      .filter(notInForm);
    if (copy.length) tl.from(copy, { y: 24, autoAlpha: 0, stagger: 0.08, clearProps: CLEAR }, '-=0.75');
    const media = hero.querySelectorAll('img, picture');
    if (media.length) tl.from(media, { scale: 1.06, autoAlpha: 0, duration: 1.4, clearProps: CLEAR }, 0.1);
    // Fond photo du hero d'accueil : léger parallaxe au scroll.
    if (hero.style.backgroundImage) {
      gsap.fromTo(hero, { backgroundPositionY: '50%' }, {
        backgroundPositionY: '65%', ease: 'none',
        scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true }
      });
    }
  }

  function reveal(targets, vars = {}) {
    targets.forEach(el => gsap.from(el, {
      y: 36, autoAlpha: 0, clearProps: CLEAR, ...vars,
      scrollTrigger: { trigger: el, start: 'top 88%', once: true }
    }));
  }

  function countUp(el) {
    const m = el.textContent.match(/^(\D*)(\d+)(.*)$/s);
    if (!m) return reveal([el]);
    const [, pre, num, post] = m;
    const end = Number(num);
    const state = { v: 0 };
    el.setAttribute('aria-label', el.textContent.trim());
    gsap.to(state, {
      v: end, duration: 1.6, ease: 'power2.out',
      onUpdate: () => { el.textContent = pre + Math.round(state.v) + post; },
      scrollTrigger: { trigger: el, start: 'top 90%', once: true }
    });
    el.textContent = pre + '0' + post;
  }

  function build(root, { intro, withHeader }) {
    const done = new Set();
    const hero = root.querySelector(HERO);
    if (intro) heroIntro(root, hero, withHeader);
    if (hero) hero.querySelectorAll('*').forEach(el => done.add(el));
    root.querySelectorAll('.yd-header *, .yd-tabs *').forEach(el => done.add(el));
    const free = el => !done.has(el) && notInForm(el) && visible(el);

    // Compteurs
    root.querySelectorAll(STATS).forEach(el => { if (free(el)) { done.add(el); countUp(el); } });

    // Cartes et listes : apparition groupée en cascade
    const cards = [...root.querySelectorAll(CARDS)].filter(el => free(el) && !el.closest('.yd-footer'));
    const topCards = cards.filter(el => !cards.some(o => o !== el && o.contains(el)));
    topCards.forEach(el => { done.add(el); el.querySelectorAll('*').forEach(c => done.add(c)); });
    if (topCards.length) {
      gsap.set(topCards, { y: 48, autoAlpha: 0 });
      ScrollTrigger.batch(topCards, {
        start: 'top 90%', once: true,
        onEnter: batch => gsap.to(batch, { y: 0, autoAlpha: 1, stagger: 0.1, overwrite: true, clearProps: CLEAR })
      });
    }

    // Images éditoriales : dévoilement vertical
    const imgs = [...root.querySelectorAll('section img, .yd-container img')]
      .filter(img => free(img) && !img.closest('.yd-bottom, .yd-footer') && img.offsetWidth > 160);
    imgs.forEach(img => {
      done.add(img);
      gsap.fromTo(img, { clipPath: 'inset(0% 0% 100% 0%)' }, {
        clipPath: 'inset(0% 0% 0% 0%)', duration: 1.3, ease: 'power4.inOut', clearProps: 'clipPath',
        scrollTrigger: { trigger: img, start: 'top 85%', once: true }
      });
    });

    // Titres et paragraphes d'introduction de section
    const texts = [...root.querySelectorAll('section h2, section h3, section > p, section > div > p, .yd-container > p, .yd-bottom .yd-button, blockquote')]
      .filter(el => free(el) && !el.closest('.yd-footer'));
    texts.forEach(el => done.add(el));
    reveal(texts);

    // Bandeau final : griffon en parallaxe
    const griffon = [...root.querySelectorAll('.yd-bottom img')].find(visible);
    if (griffon) {
      gsap.fromTo(griffon, { yPercent: 12 }, {
        yPercent: -8, ease: 'none',
        scrollTrigger: { trigger: griffon && griffon.closest('.yd-bottom'), start: 'top bottom', end: 'bottom top', scrub: true }
      });
    }

    // Pied de page : colonnes en cascade
    const footer = [...root.querySelectorAll('.yd-footer')].find(visible);
    const cols = footer ? footer.querySelectorAll('.yd-footer-grid > div') : [];
    if (cols.length) {
      gsap.from(cols, {
        y: 30, autoAlpha: 0, stagger: 0.08, clearProps: CLEAR,
        scrollTrigger: { trigger: footer, start: 'top bottom-=40', once: true }
      });
    }

    // Les images chargées en différé changent la hauteur de page : recalcul.
    const refresh = gsap.delayedCall(0.2, () => ScrollTrigger.refresh()).pause();
    root.querySelectorAll('img').forEach(img => {
      if (!img.complete) img.addEventListener('load', () => refresh.restart(true), { once: true });
    });
  }

  function onRender() {
    const sameView = location.hash === lastHash;
    lastHash = location.hash;
    if (mm) mm.revert();
    mm = gsap.matchMedia();
    const root = main.querySelector('.yd-site') || main;
    const opts = { intro: !sameView, withHeader: firstRender };
    firstRender = false;
    // Redessin d'une même page (étapes de formulaire) : pas de nouvelle animation.
    if (sameView) return;
    mm.add('(prefers-reduced-motion: no-preference)', () => build(root, opts));
  }

  new MutationObserver(onRender).observe(main, { childList: true });
  if (main.children.length) onRender();
  document.fonts?.ready.then(() => ScrollTrigger.refresh());
})();

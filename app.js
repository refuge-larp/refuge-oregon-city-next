const q = selector => document.querySelector(selector);
document.getElementById('theme').addEventListener('change',event=>{document.documentElement.dataset.theme=event.target.value;});
// Header Refuge Database menu
(() => {
  const trigger = q('.menu-trigger'), list = q('.menu-list');
  const close = () => { trigger.setAttribute('aria-expanded', 'false'); list.hidden = true; };
  trigger.addEventListener('click', () => { const open = trigger.getAttribute('aria-expanded') === 'true'; open ? close() : (trigger.setAttribute('aria-expanded', 'true'), list.hidden = false); });
  document.addEventListener('click', event => { if (!event.target.closest('.menu')) close(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && !list.hidden) { close(); trigger.focus(); } });
})();



// Approved event photography lightbox.

(() => {
  const snaps = [...document.querySelectorAll('.tile')];
  const box = q('#photo-dialog'), large = q('#photo-large');
  let current = 0, trigger = null;
  const show = i => {
    current = (i + snaps.length) % snaps.length;
    const label = snaps[current].getAttribute('aria-label').replace(/^Enlarge photo: /, '');
    large.src = snaps[current].querySelector('img').src;
    large.alt = label;
  };
  snaps.forEach((snap, i) => snap.addEventListener('click', () => { trigger = snap; show(i); box.showModal(); }));
  q('#photo-close').addEventListener('click', () => box.close());
  q('#photo-prev').addEventListener('click', () => show(current - 1));
  q('#photo-next').addEventListener('click', () => show(current + 1));
  box.addEventListener('click', event => { if (event.target === box) box.close(); });
  box.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') show(current - 1);
    if (event.key === 'ArrowRight') show(current + 1);
  });
  box.addEventListener('close', () => trigger?.focus());
})();

(() => {
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const images = [...document.querySelectorAll('article img')];
  images.forEach(image => image.classList.add('moving-image'));
  const progress = document.querySelector('.progress');
  let queued = false;
  function paint() {
    queued = false;
    const height = window.innerHeight;
    const distance = document.documentElement.scrollHeight - height;
    progress.style.transform = `scaleX(${distance > 0 ? Math.min(1, Math.max(0, window.scrollY / distance)) : 0})`;
    images.forEach(image => {
      if (motion.matches) { image.style.transform = ''; return; }
      const box = image.parentElement.getBoundingClientRect();
      if (box.bottom < 0 || box.top > height) return;
      const preserveEdges = image.closest('.portrait, .artifact');
      const limit = box.height * (preserveEdges ? .14 : .26);
      // Move continuously throughout the image's passage through the viewport.
      // Overscan (or inset space for complete artworks) keeps the edges covered.
      const passage = (height - box.top) / (height + box.height);
      const shift = (Math.max(0, Math.min(1, passage)) * 2 - 1) * limit;
      image.style.transform = `translate3d(0, ${shift}px, 0)`;
    });
  }
  function queue() { if (!queued) { queued = true; requestAnimationFrame(paint); } }
  window.addEventListener('scroll', queue, { passive: true });
  window.addEventListener('resize', queue);
  motion.addEventListener('change', queue);
  paint();
})();

(() => {
  const search = document.querySelector('.archive-search');
  const input = document.getElementById('archiveSearchInput');
  const toggle = document.getElementById('archiveSearchToggle');
  const count = document.getElementById('archiveResultCount');
  const noResults = document.getElementById('archiveNoResults');
  const cards = [...document.querySelectorAll('.archive-grid .archive-card')];
  if (!search || !input || !toggle || !count || !noResults) return;

  const normalize = value => value.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
  const titles = cards.map(card => normalize(card.querySelector('h3')?.textContent || ''));

  function filterTitles() {
    const query = normalize(input.value);
    let visible = 0;
    cards.forEach((card, index) => {
      const matches = !query || titles[index].includes(query);
      card.hidden = !matches;
      if (matches) visible++;
    });
    cards.forEach(card => card.classList.remove('archive-card-single'));
    const visibleCards = cards.filter(card => !card.hidden);
    const pairedCards = visibleCards[0] === cards[0] ? visibleCards.slice(1) : visibleCards;
    if (pairedCards.length % 2 === 1) pairedCards.at(-1).classList.add('archive-card-single');
    count.textContent = `${visible} ${visible === 1 ? 'entry' : 'entries'}`;
    noResults.hidden = visible !== 0;
  }

  function setOpen(open) {
    search.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close title search' : 'Open title search');
    input.tabIndex = open ? 0 : -1;
    if (open) {
      input.focus();
    } else {
      input.value = '';
      filterTitles();
      toggle.focus();
    }
  }

  toggle.addEventListener('click', () => setOpen(!search.classList.contains('is-open')));
  input.addEventListener('input', filterTitles);
  input.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      event.preventDefault();
      setOpen(false);
    }
  });
  search.addEventListener('submit', event => event.preventDefault());
  filterTitles();
})();

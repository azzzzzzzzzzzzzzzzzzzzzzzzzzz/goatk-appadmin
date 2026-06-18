// ── Sort toggle ──
const sortOpts = document.querySelectorAll('.sort-opt');
let currentSort = 'az';

sortOpts.forEach(btn => {
  btn.addEventListener('click', () => {
    sortOpts.forEach(b => b.classList.remove('sort-opt--active'));
    btn.classList.add('sort-opt--active');
    currentSort = btn.dataset.sort;
    applyFilters();
  });
});

// ── Custom dropdown ──
const trigger = document.getElementById('select-trigger');
const menu = document.getElementById('select-menu');
const selectLabel = document.getElementById('select-label');
const selectOpts = document.querySelectorAll('.select-opt');
let currentCat = 'Semua';

trigger.addEventListener('click', (e) => {
  e.stopPropagation();
  menu.classList.toggle('is-open');
});

document.addEventListener('click', () => menu.classList.remove('is-open'));

selectOpts.forEach(opt => {
  opt.addEventListener('click', () => {
    selectOpts.forEach(o => o.classList.remove('select-opt--active'));
    opt.classList.add('select-opt--active');
    currentCat = opt.dataset.val;
    selectLabel.textContent = currentCat;
    menu.classList.remove('is-open');
    applyFilters();
  });
});

// ── Search ──
const searchInput = document.querySelector('.search-input');
searchInput.addEventListener('input', applyFilters);

// ── Checkboxes ──
const checkRendah = document.getElementById('check-rendah');
const checkTinggi = document.getElementById('check-tinggi');
checkRendah.addEventListener('change', applyFilters);
checkTinggi.addEventListener('change', applyFilters);

// ── Apply all filters + sort ──
function applyFilters() {
  const q = searchInput.value.toLowerCase();
  const cards = Array.from(document.querySelectorAll('.product-card'));

  // Filter
  cards.forEach(card => {
    const name = card.dataset.name;
    const cat = card.dataset.cat;
    const level = card.dataset.level;

    const matchSearch = name.includes(q);
    const matchCat = currentCat === 'Semua' || cat === currentCat;
    const matchLevel =
      (!checkRendah.checked && !checkTinggi.checked) ||
      (checkRendah.checked && level === 'rendah') ||
      (checkTinggi.checked && level === 'tinggi') ||
      (checkRendah.checked && checkTinggi.checked);

    card.style.display = (matchSearch && matchCat && matchLevel) ? '' : 'none';
  });

  // Sort visible cards
  const grid = document.getElementById('product-grid');
  const visible = cards.filter(c => c.style.display !== 'none');
  const hidden = cards.filter(c => c.style.display === 'none');

  if (currentSort === 'asc') {
    visible.sort((a, b) => a.dataset.name.localeCompare(b.dataset.name));
  } else if (currentSort === 'desc') {
    visible.sort((a, b) => b.dataset.name.localeCompare(a.dataset.name));
  }

  [...visible, ...hidden].forEach(c => grid.appendChild(c));
}

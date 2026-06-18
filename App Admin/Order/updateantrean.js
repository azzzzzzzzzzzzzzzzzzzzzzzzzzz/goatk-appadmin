// Toggle dropdown buka/tutup
function toggleDropdown(btn) {
  const wrap = btn.closest('.status-select-wrap');
  const isOpen = wrap.classList.contains('is-open');

  // Tutup semua dropdown lain dulu
  document.querySelectorAll('.status-select-wrap').forEach(w => w.classList.remove('is-open'));

  if (!isOpen) {
    wrap.classList.add('is-open');
  }
}

// Pilih status baru
function setStatus(optEl, statusKey, statusLabel) {
  const wrap = optEl.closest('.status-select-wrap');
  wrap.dataset.status = statusKey;
  wrap.querySelector('.status-text').textContent = statusLabel;
  wrap.classList.remove('is-open');
}

// Klik di luar dropdown → tutup semua
document.addEventListener('click', (e) => {
  if (!e.target.closest('.status-select-wrap')) {
    document.querySelectorAll('.status-select-wrap').forEach(w => w.classList.remove('is-open'));
  }
});
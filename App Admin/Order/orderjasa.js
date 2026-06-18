let activeBtn = null;

function showConfirm(nama, btn) {
  activeBtn = btn;
  document.getElementById('modal-overlay').classList.add('is-open');
}

function closeConfirm() {
  document.getElementById('modal-overlay').classList.remove('is-open');
  activeBtn = null;
}

function konfirmasi() {
  if (activeBtn) {
    activeBtn.disabled = true;
    activeBtn.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      Sudah dikonfirmasi
    `;
  }
  closeConfirm();
  setTimeout(() => {
    window.location.href = 'konfirmasiberhasil.html';
  }, 200);
}
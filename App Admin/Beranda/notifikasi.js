// Klik "BACA SAJA" → hapus highlight biru & dot
function bacaSaja(el) {
  const item = el.closest('.notif-item');
  item.classList.remove('notif-item--unread');
  const dot = item.querySelector('.notif-dot');
  if (dot) dot.remove();
}
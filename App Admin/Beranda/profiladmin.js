function simpanInfo(bagian) {
  alert('Perubahan pada "' + bagian + '" berhasil disimpan!');
}

function logoutSemua() {
  const konfirmasi = confirm('Yakin ingin logout dari semua perangkat lain?');
  if (konfirmasi) {
    alert('Semua sesi lain berhasil di-logout.');
  }
}

function cekKekuatan() {
  const pw = document.getElementById('pw-baru').value;
  const seg1 = document.getElementById('seg1');
  const seg2 = document.getElementById('seg2');
  const seg3 = document.getElementById('seg3');
  const label = document.getElementById('strength-label');

  seg1.style.background = '#E5E7EB';
  seg2.style.background = '#E5E7EB';
  seg3.style.background = '#E5E7EB';

  if (pw.length === 0) {
    label.textContent = 'Kekuatan: -';
    return;
  }

  let skor = 0;
  if (pw.length >= 8) skor++;
  if (/[A-Z]/.test(pw) && /[0-9]/.test(pw)) skor++;
  if (/[!@#$%^&*]/.test(pw) && pw.length >= 10) skor++;

  if (skor >= 1) { seg1.style.background = '#F59E0B'; label.textContent = 'Kekuatan: Lemah'; label.style.color = '#D97706'; }
  if (skor >= 2) { seg2.style.background = '#F59E0B'; label.textContent = 'Kekuatan: Sedang'; label.style.color = '#D97706'; }
  if (skor >= 3) { seg3.style.background = '#16A34A'; seg2.style.background = '#16A34A'; seg1.style.background = '#16A34A'; label.textContent = 'Kekuatan: Kuat'; label.style.color = '#16A34A'; }
}
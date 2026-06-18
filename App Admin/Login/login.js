const btnUser = document.getElementById('btn-user');
const btnAdmin = document.getElementById('btn-admin');
const btnMasuk = document.getElementById('btn-masuk');
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');

// Toggle User / Admin
btnUser.addEventListener('click', () => {
  btnUser.classList.add('active');
  btnUser.style.backgroundColor = 'var(--variable-collection-biru-inti-duplicate)';
  btnUser.querySelector('.text').style.color = '#ffffff';
  
  btnAdmin.classList.remove('active');
  btnAdmin.style.backgroundColor = 'transparent';
  btnAdmin.querySelector('.text-2').style.color = 'var(--variable-collection-biru-inti-duplicate)';
});

btnAdmin.addEventListener('click', () => {
  btnAdmin.classList.add('active');
  btnAdmin.style.backgroundColor = 'var(--variable-collection-biru-inti-duplicate)';
  btnAdmin.querySelector('.text-2').style.color = '#ffffff';
  
  btnUser.classList.remove('active');
  btnUser.style.backgroundColor = 'transparent';
  btnUser.querySelector('.text').style.color = 'var(--variable-collection-biru-inti-duplicate)';
});

// Validasi & Submit Login
btnMasuk.addEventListener('click', (e) => {
  e.preventDefault();
  if (emailInput.value === '') {
    alert('Email tidak boleh kosong!');
    return;
  }
  if (passwordInput.value === '') {
    alert('Password tidak boleh kosong!');
    return;
  }
  window.location.href = '../Beranda/beranda.html';
});
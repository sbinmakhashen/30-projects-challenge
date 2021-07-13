const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const searchDiv = document.querySelector('.search');

btn.addEventListener('click', () => {
  searchDiv.classList.toggle('active');
  input.focus();
});

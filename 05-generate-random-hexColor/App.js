const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
  const randomHexCo = Math.random().toString(16).substring(2, 8);
  const body = document.body;
  body.style.backgroundColor = `#${randomHexCo}`;
  text.innerHTML = `#${randomHexCo}`;
});

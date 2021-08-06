const container = document.querySelector('.container');
const imgAPI = 'https://ui-avatars.com/api/';

function loadImage() {
  const imgNumPerScroll = 10;
  for (let i = 0; i < imgNumPerScroll; i++) {
    const image = document.createElement('img');
    const randomNum = Number(Math.floor(Math.random() * 100));
    image.src = `${imgAPI}${randomNum}`;
    image.className = 'img';
    container.appendChild(image);
  }
}
loadImage();

window.addEventListener('scroll', () => {
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    loadImage();
  }
});

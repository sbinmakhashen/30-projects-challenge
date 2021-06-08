// listen for a scroll event
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  console.log(header);
  header.classList.toggle('sticky', scrollY > 50);
  console.log(scrollY);
});

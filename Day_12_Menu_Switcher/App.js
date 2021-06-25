const ul = document.querySelector('.nav-list');
// console.log(ul);
ul.addEventListener('click', (event) => {
  const target = event.target;
  const active = document.querySelector('.active');
  // adding active class to any link I click on
  target.classList.add('active');
  // remove active class so when any link clicked the active class willl be added on the clicked element and removed on the previous element
  active.classList.remove('active');
});

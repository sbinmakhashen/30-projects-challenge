const counter = document.querySelector('.count');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
let count = 0;
// click listener for plusBtn
plusBtn.addEventListener('click', () => {
  count += 5;
  counter.innerHTML = count;
});

// click listener for minusBtn
minusBtn.addEventListener('click', () => {
  count -= 5;
  counter.innerHTML = count;
});

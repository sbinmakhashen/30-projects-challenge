const counter = document.querySelector('.count');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const resetBtn = document.querySelector('.reset-btn');
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

// Reset button
resetBtn.addEventListener('click', () => {
  count = 0;
  counter.innerHTML = count;
});

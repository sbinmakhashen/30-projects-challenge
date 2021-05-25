// declaring
const circle = document.querySelectorAll('.circle');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const progress = document.getElementById('progress');

let current = 1;

prev.addEventListener('click', () => {
  current--;
  if (current < 1) {
    current = 1;
  }
  update();
});

next.addEventListener('click', () => {
  current++;
  if (current > circle.length) {
    current = circle.length;
  }
  console.log(current);
  update();
});

function update() {
  circle.forEach((c, idx) => {
    if (idx < current) {
      c.classList.add('active');
    } else {
      c.classList.remove('active');
    }
  });
  // show the progress line
  const actives = document.querySelectorAll('.active');
  progress.style.width =
    ((actives.length - 1) / (circle.length - 1)) * 100 + '%';
  // enabling and disabling buttons
  if (current === 1) {
    prev.disabled = true;
  } else if (current === circle.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}

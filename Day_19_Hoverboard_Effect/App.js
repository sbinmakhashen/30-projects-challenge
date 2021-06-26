// getting the div container
const container = document.querySelector('.container');
// 700 little sqaures
const squares = 700;
// random color
const colors = [
  '#DFFF00',
  '#FFBF00',
  '#FF7F50',
  '#DE3163',
  '#9FE2BF',
  '#40E0D0',
  '#6495ED',
  '#CCCCFF',
];
// looping though the suqares
for (let i = 0; i < squares; i++) {
  // create a new elment
  const newEl = document.createElement('div');
  // add the 'square' class in the new element I have created
  newEl.classList.add('square');
  // append the new elemnet to the container
  container.appendChild(newEl);
  // event listeners for enting and leaving the hoverd element
  newEl.addEventListener('mouseenter', () => setColor(newEl));
  newEl.addEventListener('mouseleave', () => removePrev(newEl));
}
// functions for the event listeners
function setColor(newEl) {
  // generate random color
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  // styling the new element
  newEl.style.backgroundColor = randomColor;
  newEl.style.boxShadow = `0 0 5px ${randomColor}, 0 0 12px ${randomColor}`;
}

function removePrev(newEl) {
  // unsetting the box shadow
  newEl.style.boxShadow = 'unset';
  // setting the background color back to its original color
  newEl.style.backgroundColor = '#2b2626';
}

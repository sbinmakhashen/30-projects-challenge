// vars
const cards = document.querySelectorAll('.card');
const currentElement = document.querySelector('.currentEl');

// loop through empty cards
for (let card of cards) {
  card.addEventListener('dragenter', dragEnter);
  card.addEventListener('dragleave', dragLeave);
  card.addEventListener('dragover', dragOver);
  card.addEventListener('drop', dragDrop);
}

// funcitons for cards
function dragEnter(e) {
  e.preventDefault();
  this.classList.add('enter');
}

function dragLeave() {
  this.classList.remove('enter');
}

function dragOver(e) {
  e.preventDefault();
}

function dragDrop() {
  this.append(currentElement);
  this.classList.remove('enter');
}

// drag events for the current filled element below
currentElement.addEventListener('dragstart', dragStart);
currentElement.addEventListener('dragend', dragEnd);

// functions for the current filled element
function dragStart() {
  this.classList.add('dragged');
  setTimeout(() => this.classList.add('disappear'), 0);
}

function dragEnd() {
  this.classList.remove('disappear');
}

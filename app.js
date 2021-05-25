// select panels
const panels = document.querySelectorAll('.panel');
// loop through panels
panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    // remove the active class on the prevoius ones that has it
    removeActive();
    // add the active class
    panel.classList.add('active');
  });
});

// function that removes the active class
function removeActive() {
  panels.forEach((panel) => panel.classList.remove('active'));
}

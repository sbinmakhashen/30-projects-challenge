// Vars
const input = document.getElementById('search');
const lis = document.getElementsByTagName('li');
// keyup
input.addEventListener('keyup', () => {
  const value = input.value;
  // loop through every item in the list
  for (let i = 0; i < lis.length; i++) {
    // validation
    if (lis[i].innerHTML.toLowerCase().includes(value)) {
      lis[i].style.display = '';
    } else {
      lis[i].style.display = 'none';
    }
  }
});

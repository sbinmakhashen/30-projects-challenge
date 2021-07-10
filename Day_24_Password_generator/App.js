// getting DOM elemnets
const input = document.getElementById('pass');
const btn = document.querySelector('.btn');
const updatePassInput = document.getElementById('update');
const updateContainer = document.querySelector('.update-container');
// password characters
const PasswordChars =
  'ABCDEFGHIKLMNOPQRSTVXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()_-+={[}]|:;"<,>.?/';
// event listener for a click
btn.addEventListener('click', getPassword);

function getPassword() {
  let password = '';
  const passLength = updatePassInput.value;
  for (let i = 0; i < passLength; i++) {
    const randomNum = Math.floor(Math.random() * PasswordChars.length);
    password += PasswordChars[randomNum];
  }
  return (input.value = password);
}

// stopping update container from floating when hovering
updateContainer.addEventListener('mouseover', () => {
  updateContainer.classList.add('stopFloat');
});

// when mouse leaves the update container area the container will will float again
updateContainer.addEventListener('mouseleave', () => {
  updateContainer.classList.remove('stopFloat');
});

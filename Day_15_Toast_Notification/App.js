// vars
const toasts = document.getElementById('toasts');
const btn = document.getElementById('btn');
const messages = ['Test 1', 'Test 2', 'Test 3', 'Test 4', 'Test 5'];
const typeOfMessage = ['normal', 'success', 'error'];

btn.addEventListener('click', () => handleClick());

const handleClick = () => {
  const toast = document.createElement('div');
  toast.classList.add('toast');
  toast.classList.add(randomTypes());
  toasts.appendChild(toast);
  toast.innerHTML = randomMessages();
  // make notification messages disapear after 2 seconds
  setTimeout(() => {
    toast.remove();
  }, 2000);
};

const randomMessages = () => {
  return messages[Math.floor(Math.random() * messages.length)];
};

const randomTypes = () => {
  return typeOfMessage[Math.floor(Math.random() * typeOfMessage.length)];
};

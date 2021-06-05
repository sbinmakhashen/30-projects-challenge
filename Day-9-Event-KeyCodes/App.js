const keyGroup = document.querySelector('.key-group');

window.addEventListener('keydown', (event) => {
  keyGroup.innerHTML = `
  <div class="key">
        <h4>event.key</h4>
        <h2>${event.key === ' ' ? 'Space' : event.key}</h2>
      </div>
      
      <div class="key">
        <h4>event.keyCode</h4>
        <h2>${event.keyCode}</h2>
      </div>
  
      <div class="key">
        <h4>event.code</h4>
        <h2>${event.code}</h2>
      </div>
  `;
  const message = document.querySelector('.message');
  message.style.display = 'none';
});

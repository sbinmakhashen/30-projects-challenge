const soundEffects = ['cheerGroup', 'crowdLaugh', 'keyboardTyping', 'gameOver'];
// loop thoru each element
soundEffects.forEach((soundEffect) => {
  // create a button for each soundEffect elment
  const btn = document.createElement('button');
  btn.className = 'btn';
  // append element that was created to parent elment
  const parentEL = document.getElementById('buttons');
  parentEL.appendChild(btn);
  // inserting the text of each string of the soundEffects in each button
  btn.innerHTML = soundEffect;
  btn.addEventListener('click', () => {
    // stop audio
    stopAudio();
    // play the audio
    document.getElementById(soundEffect).play();
  });
});

// stop audio
const stopAudio = () => {
  soundEffects.forEach((sound) => {
    const audio = document.getElementById(sound);
    // stopping the audio
    audio.pause();
    audio.currentTime = 0;
  });
};
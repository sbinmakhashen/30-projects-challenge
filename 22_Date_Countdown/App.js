// getting the contianer for dispaling the date countDown
const results = document.querySelector('.countdown');

// The function will be created inside of the setInterval() method which will run our callback funciton every 1000 millisecond which is equivalent to 1 second
const countDown = setInterval(() => {
  // The deadline date is the holidy Eid date
  const deadlineDate = new Date('Jul/19/2021');

  // This is going to be the current date and time as I'm typing this comment this present
  const currentDate = new Date();

  // The timeLeft variable is for getting the time that is remaining to get to the targeted date wich is the eid holiday
  const timeLeft = deadlineDate - currentDate;

  // calculation to get the remaining days, hours, minutes and seconds
  const days = Math.floor(timeLeft / 1000 / 60 / 60 / 24);
  const hours = Math.floor(timeLeft / 1000 / 60 / 60) % 24;
  const minutes = Math.floor(timeLeft / 1000 / 60) % 60;
  const seconds = Math.floor(timeLeft / 1000) % 60;

  // Display the calculated date in above in the DOM
  // results.innerHTML = `Eid al-Adha will be in: ${days} days ${hours}Hrs : ${updateDigit(
  // minutes
  // )}Min : ${updateDigit(seconds)}s`;

  results.innerHTML = `Eid holiday is in: <span class='timer'>${days} days ${hours}Hrs : ${updateDigit(
    minutes
  )}Min : ${updateDigit(seconds)}s</span>`;

  // validate to check if we have met the deadline
  if (timeLeft < 0) {
    // if thats is the case I want to clear the function and display a message instead of the date countdown for celebrating the 'Eid al adha' holiday
    clearInterval(countDown);
    results.innerHTML = 'Eid Mubarak, Eid Saeed :)';
  }
}, 1000);

// updateDigit function will check if the our remaining numbers are not 2 digits of the current remaining number is less than 2 digits 0 will be displayed in before that number
function updateDigit(digit) {
  return digit < 10 ? `0${digit}` : digit;
}

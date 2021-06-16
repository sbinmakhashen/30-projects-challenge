const counters = document.querySelectorAll('.counter');
const speed = 20;
counters.forEach((counter) => {
  const update = () => {
    const currentVal = Number(counter.innerHTML);
    const dataTarget = Number(counter.getAttribute('data-target'));
    const incrementNum = dataTarget / speed;
    // console.log(typeof dataTarget, dataTarget);
    // validation
    if (currentVal < dataTarget) {
      counter.innerHTML = currentVal + incrementNum;
      setTimeout(update, 90);
    } else {
      counter.innerHTML = dataTarget;
    }
  };
  update();
});

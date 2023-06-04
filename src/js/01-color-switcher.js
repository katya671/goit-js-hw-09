const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

startButton.addEventListener('click', startColorChange);
stopButton.addEventListener('click', stopColorChange);
let timerId;

stopButton.disabled = true;

function startColorChange() {
  timerId = setInterval(changeBackgroundColor, 1000);
  startButton.disabled = true;
  stopButton.disabled = false;
}

function stopColorChange() {
  clearInterval(timerId);
  startButton.disabled = false;
  stopButton.disabled = true;
}

function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

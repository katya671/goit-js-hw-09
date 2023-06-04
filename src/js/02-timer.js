import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startButton = document.querySelector('[data-start]');
const datetimePicker = document.querySelector('#datetime-picker');
const timerFields = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

startButton.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];

    if (selectedDate < new Date()) {
      window.alert('Please choose a date in the future');
    } else {
      startButton.disabled = false;
    }
  },
};

flatpickr(datetimePicker, options);

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function startTimer() {
  const selectedDate = new Date(datetimePicker.value);
  const currentDate = new Date();
  let timeDifference = selectedDate.getTime() - currentDate.getTime();

  if (timeDifference <= 0) {
    return;
  }

  const timerId = setInterval(() => {
    const { days, hours, minutes, seconds } = convertMs(timeDifference);

    timerFields.days.textContent = addLeadingZero(days);
    timerFields.hours.textContent = addLeadingZero(hours);
    timerFields.minutes.textContent = addLeadingZero(minutes);
    timerFields.seconds.textContent = addLeadingZero(seconds);

    timeDifference -= 1000;

    if (timeDifference < 0) {
      clearInterval(timerId);
      startButton.disabled = true;
    }
  }, 1000);
}

startButton.addEventListener('click', () => {
  startButton.disabled = true;
  datetimePicker.disabled = true;
  startTimer();
});

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const form = document.querySelector('.form');
const delay = document.querySelector('input[name="delay"]');
const step = document.querySelector('input[name="step"]');
const amount = document.querySelector('input[name="amount"]');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onSubmit(event) {
  event.preventDefault();

  const firstDelay = parseInt(delay.value);
  const delayStep = parseInt(step.value);
  const amountValue = parseInt(amount.value);

  for (let i = 0; i < amountValue; i++) {
    const position = i + 1;
    const delayValue = firstDelay + i * delayStep;
    createPromise(position, delayValue)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }

  form.reset();
}

form.addEventListener('submit', onSubmit);

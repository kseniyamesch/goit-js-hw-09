import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
  form: document.querySelector('.form')
};
refs.form.addEventListener('submit', onFormSubmit);
 
console.log(typeof(refs.delay.value))


  function onFormSubmit (evt) {
    evt.preventDefault();
  const delay = Number(refs.delay.value);
  const step = Number(refs.step.value);
  const amount = Number(refs.amount.value);
  let calculatedDelay = delay;
  for (let i = 1; i <= amount; i += 1) {
    createPromise (i, calculatedDelay).then(({ position, delay }) => {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    }).catch(({ position, delay }) => {
      Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
  calculatedDelay += step;
}
} 

  function createPromise(position, delay) {
    return new Promise ((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;
      setTimeout(() => {if (shouldResolve) {
        resolve(({ position: position, delay: delay }))
      } else {
        reject(({ position: position, delay: delay }))
      }}, delay)
    }
    )}
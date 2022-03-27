const refs = {
startBtnEl: document.querySelector('[data-start]'),
stopBtnEl: document.querySelector('[data-stop]'),
bodyEl: document.querySelector('body')
}
let timerId = null;
refs.stopBtnEl.setAttribute('disabled', true); 

refs.startBtnEl.addEventListener('click', onBtnStartClick);
refs.stopBtnEl.addEventListener('click', onBtnStopClick);

function onBtnStartClick () {
    refs.startBtnEl.setAttribute('disabled', true);
    refs.stopBtnEl.removeAttribute('disabled');
    timerId = setInterval (() => {
        refs.bodyEl.style.backgroundColor = getRandomHexColor();
        
    }, 1000)
}
function onBtnStopClick () {
    refs.startBtnEl.removeAttribute('disabled');
    clearInterval(timerId);
    refs.stopBtnEl.setAttribute('disabled', true);
}
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
// Напиши скрипт, который после нажатия кнопки «Start», раз в секунду меняет цвет фона <body> на случайное значение используя инлайн стиль. 
// При нажатии на кнопку «Stop», изменение цвета фона должно останавливаться.
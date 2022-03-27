const refs = {
startBtnEl: document.querySelector('[data-start]'),
stopBtnEl: document.querySelector('[data-stop]'),
bodyEl: document.querySelector('body')
}
refs.startBtnEl.addEventListener('click', onBtnStartClick);
refs.stopBtnEl.addEventListener('click', onBtnStopClick);

let timerId = null;
console.log(refs.bodyEl)


console.log(refs.startBtnEl);
console.log(refs.stopBtnEl);
function onBtnStartClick () {
    console.log("click");
    timerId = setInterval (() => {
        refs.bodyEl.style.backgroundColor = getRandomHexColor()
    }, 1000)
}
function onBtnStopClick () {
    console.log('stop');
    clearInterval(timerId);
}
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
// Напиши скрипт, который после нажатия кнопки «Start», раз в секунду меняет цвет фона <body> на случайное значение используя инлайн стиль. 
// При нажатии на кнопку «Stop», изменение цвета фона должно останавливаться.
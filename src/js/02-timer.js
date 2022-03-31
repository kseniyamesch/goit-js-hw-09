import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
    inputRef: document.querySelector('#datatime-picker'),
    startBtnRef: document.querySelector('[data-start]'),
    daysCountRef: document.querySelector('[data-days]'),
    hoursCountRef: document.querySelector('[data-hours]'),
    minutesCountRef: document.querySelector('[data-minutes]'),
    secondsCountRef: document.querySelector('[data-seconds]')
}

const options = {
    
    altInput: true,
    
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
    },
  };

  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
const fp = flatpickr("#datetime-picker", {options});
fp.config.onChange.push(function onClose (selectedDates, dateStr, instance) { 
    console.log(selectedDates),
    console.log(dateStr),
    console.log(instance)
} );
refs.startBtnRef.setAttribute('disabled', true)




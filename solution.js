// Challenge 1: Delayed Message
function delayedMessage(message, delay) {
    setTimeout(() => {
      console.log(message);
    }, delay);
  }
  
  // Challenge 2: Countdown
  function countdown(number) {
    let currentNumber = number;
    const countdownInterval = setInterval(() => {
      console.log(currentNumber);
      currentNumber--;
      if (currentNumber < 0) {
        clearInterval(countdownInterval);
      }
    }, 1000);
  }


  module.exports = { delayedMessage, countdown };
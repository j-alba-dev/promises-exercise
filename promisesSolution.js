// Challenge 1: Delayed Promise
function delayedPromise(message, delay) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(message);
      }, delay);
    });
  }
  
  // Challenge 2: Random Number Promise
  function randomPromise() {
    return new Promise((resolve, reject) => {
      const randomNumber = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
      if (randomNumber % 2 === 0) {
        resolve(randomNumber);
      } else {
        reject('Odd number');
      }
    });
  }
  
  // Challenge 3: Fetch Data Promise
  function fetchData(url) {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous request
      setTimeout(() => {
        const data = {
          id: 1,
          name: 'John Doe',
          email: 'johndoe@example.com'
        };
        resolve(data);
      }, 2000);
    });
  }
  
  module.exports = { delayedPromise, randomPromise, fetchData };
  
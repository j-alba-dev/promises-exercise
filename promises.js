// Challenge 1: Delayed Promise
function delayedPromise(message, delay) {
  // TODO: Write code to create a promise that resolves with the message after the specified delay using setTimeout
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
}

// Challenge 2: Random Number Promise
function randomPromise() {
  // TODO: Write code to create a promise that generates a random number between 1 and 10
  // Resolve the promise with the random number if it is even, and reject it with the message "Odd number" if it is odd
  return new Promise((resolve, reject) => {
    const num = Math.floor(Math.random() * 10) + 1;
    if (num % 2 === 0) {
      resolve(num);
    } else {
      reject("Odd number");
    }
  });
}

// console.log(randomPromise());

// Challenge 3: Fetch Data Promise
function fetchData(url) {
  // TODO: Write code to create a promise that fetches data from the given URL (simulated async request)
  // After a 2-second delay, resolve the promise with a sample data object
  return new Promise((resolve, reject) => {
    setTimeout(
      (func = () => {
        const data = {
          data: "Sample data object",
        };
        resolve(data);
      }),
      2000
    );
  });
}

console.log(fetchData);

module.exports = { delayedPromise, randomPromise, fetchData };

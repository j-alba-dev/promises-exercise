// Challenge 1: Delayed Message

/*
Instructions:
Write a function called delayedMessage that takes in a message (string) and a delay (number) as parameters. The function should display the message after the specified delay using setTimeout.

Starter Code:
*/
module.exports = { delayedMessage, countdown };

function delayedMessage(message, delay) {
  // Write your code here
  setTimeout(
    (func = () => {
      console.log(message);
    }),
    delay
  );
}

// Test case
delayedMessage("Hello, world!", 2000); // Should display "Hello, world!" after a 2-second delay

// Challenge 2: Countdown

/*
Instructions:
Write a function called countdown that takes in a number as a parameter and displays a countdown from that number to 0. Each number should be displayed after a delay of 1 second using setTimeout.

Starter Code:
*/

function countdown(number) {
  // Write your code here
  setTimeout(
    (func = () => {
      for (let i = number; i >= 0; i--) {
        console.log(i);
      }
    }),
    1000
  );
}

// Test case
countdown(5); // Should display: 5, 4, 3, 2, 1, 0 with a 1-second delay between each number

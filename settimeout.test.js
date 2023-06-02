const { delayedMessage, countdown, randomGenerator } = require("./setTimeOut");
// Unit tests
test("delayedMessage displays the message after the specified delay", (done) => {
  const originalLog = console.log;
  const mockedLog = jest.fn();

  console.log = mockedLog;

  delayedMessage("Hello, world!", 2000);

  setTimeout(() => {
    expect(mockedLog).toHaveBeenCalledWith("Hello, world!");
    console.log = originalLog;
    done();
  }, 2500);
});

test("countdown displays numbers from the given number to 0 with a 1-second delay", (done) => {
  const originalLog = console.log;
  const mockedLog = jest.fn();

  console.log = mockedLog;

  countdown(5);

  setTimeout(() => {
    expect(mockedLog.mock.calls).toEqual([[5], [4], [3], [2], [1], [0]]);
    console.log = originalLog;
    done();
  }, 7000); // Increased timeout value to 7000 ms
}, 10000); // Set the overall timeout for the test to 10000 ms

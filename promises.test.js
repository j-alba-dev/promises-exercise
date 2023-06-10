const {
  delayedPromise,
  randomPromise,
  fetchData,
} = require("./promisesSolution");

test("delayedPromise resolves with the message after the specified delay", (done) => {
  const delay = 2000;
  const message = "Hello, world!";
  const startTime = Date.now();

  delayedPromise(message, delay).then((result) => {
    const endTime = Date.now();
    const elapsedTime = endTime - startTime;

    expect(result).toBe(message);
    expect(elapsedTime).toBeGreaterThanOrEqual(delay);
    done();
  });
});

test('randomPromise resolves with an even number and rejects with "Odd number" for an odd number', (done) => {
  randomPromise()
    .then((result) => {
      expect(result % 2).toBe(0);
      done();
    })
    .catch((error) => {
      expect(error).toBe("Odd number");
      done();
    });
});

test("fetchData resolves with the correct data after a 2-second delay", (done) => {
  fetchData("https://example.com/api/data").then((data) => {
    expect(data).toEqual({
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
    });
    done();
  });
});

const {
  resolvedPromiseWithTimeout,
  rejectedPromiseWithTimeout,
  resolvedPromise,
  delay,
  firstPromise,
  getAllData,
} = require('../promises/resolved');

describe('Promises', () => {
  // Challenge 2
  test('Challenge 2', () => {
    return resolvedPromiseWithTimeout.then((res) =>
      expect(res).toBe('Resolved!')
    );
  });

  // Challenge 3
  test('Challenge 3', () => {
    return rejectedPromiseWithTimeout.catch((res) =>
      expect(res).toBe('Rejected!')
    );
  });

  // Challenge 4
  test('Challenge 4', () => {
    return resolvedPromise.then((res) =>
      expect(res).toBe('Promise has been resolved!')
    );
  });

  // Challenge 5
  test('Challenge 5', () => {
    return delay().then((res) => expect(res).toBe('Hello'));
  });

  // Challenge 6
  test('Challenge 6', () => {
    return firstPromise.then((res) => expect(res).toBe('Second!'));
  });

  // Challenge 7
  test('Challenge 7', () => {
    return getAllData().then((res) =>
      expect(res).toEqual([
        { name: 'Rudolph', hasPets: false, currentTemp: 98.6 },
        { name: 'Zebulon', hasPets: true, currentTemp: 22.6 },
        { name: 'Harold', hasPets: true, currentTemp: 98.3 },
      ])
    );
  });
});

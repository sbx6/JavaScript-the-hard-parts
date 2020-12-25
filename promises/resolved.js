// Challenge 1
const sayHello = () => setTimeout(() => console.log('Hello!'), 1000);

// Challenge 2
const resolvedPromiseWithTimeout = new Promise((resolve) =>
  setTimeout(() => resolve('Resolved!'), 1000)
);

// Challenge 3
const rejectedPromiseWithTimeout = new Promise((resolve, reject) =>
  setTimeout(() => reject('Rejected!'), 1000)
);

// Challenge 4
const resolvedPromise = new Promise((resolve) =>
  resolve('Promise has been resolved!')
);

// Challenge 5
const delay = () =>
  new Promise((resolve) => setTimeout(() => resolve('Hello'), 1000));

// Challenge 6
const secondPromise = new Promise((resolve) => resolve('Second!'));
const firstPromise = new Promise((resolve) => resolve(secondPromise));

// Challenge 7
const fakePeople = [
  { name: 'Rudolph', hasPets: false, currentTemp: 98.6 },
  { name: 'Zebulon', hasPets: true, currentTemp: 22.6 },
  { name: 'Harold', hasPets: true, currentTemp: 98.3 },
];

const fakeAPICall = (i) => {
  const returnTime = Math.floor(Math.random() * 1000);
  return new Promise((resolve, reject) => {
    if (i >= 0 && i < fakePeople.length) {
      setTimeout(() => resolve(fakePeople[i]), returnTime);
    } else {
      reject({ message: 'index out of range' });
    }
  });
};

const getAllData = () => {
  return Promise.all([fakeAPICall(0), fakeAPICall(1), fakeAPICall(2)]);
};

module.exports = {
  resolvedPromiseWithTimeout,
  rejectedPromiseWithTimeout,
  resolvedPromise,
  delay,
  firstPromise,
  getAllData,
};

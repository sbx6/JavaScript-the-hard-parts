// Challenge 1
// Very simple don't need to implement here. It's just a simple console.log

// Challenge 2
const delayedGreet = () => setTimeout(() => console.log('welcome'), 3000);

// Challenge 3
const helloGoodbye = () => {
  console.log('hello');
  setTimeout(() => console.log('good bye'), 3000);
};

// Challenge 4
const brokenRecord = () => setInterval(() => console.log('hi again'), 1000);

// Challenge 5
const limitedRepeat = () => {
  const interval = setInterval(() => console.log('hi for now'), 1000);
  setTimeout(() => clearInterval(interval), 5000);
};

// Challenge 6
const everyXsecsForYsecs = (func = () => {}, interval = 1, duration = 1) => {
  const id = setInterval(func, interval * 1000);
  setTimeout(() => clearInterval(id), duration * 1000);
};

// Challenge 7
const delayCounter = (target = 1, wait = 1000) => {
  return () => {
    let logNum = 0;

    const interval = setInterval(() => {
      logNum++;
      console.log(logNum);
      if (logNum === target) clearInterval(interval);
    }, wait);
  };
};

// Challenge 8
const promised = (val = '') =>
  new Promise((resolve) => setTimeout(() => resolve(val), 2000));

// Challenge 9
class SecondClock {
  constructor(cb) {
    this.cb = cb;
    this.seconds = 0;
    this.interval = null;
  }
  start() {
    this.interval = setInterval(() => {
      this.seconds++;
      this.cb(this.seconds % 60);
    }, 1000);
  }
  reset() {
    clearInterval(this.interval);
  }
}

// Challenge 10
// I didn't fully understand requirements here.

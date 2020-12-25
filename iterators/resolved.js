// Challenge 1
const sumFunc = (arr = []) => {
  let acc = 0;

  arr.forEach((item) => (acc += item));

  return acc;
};

// Challenge 1.1
const returnIterator = (arr = []) => {
  let counter = 0;

  return () => arr[counter++];
};

// Challenge 2
const nextIterator = (arr = []) => {
  let counter = 0;

  return {
    next() {
      return arr[counter++];
    },
  };
};

// Challenge 3
const sumArray = (arr = []) => {
  const iteratorWithNext = nextIterator(arr);
  let sum = 0,
    next = iteratorWithNext.next();

  while (next !== undefined) {
    sum += next;
    next = iteratorWithNext.next();
  }

  return sum;
};

// Challenge 4
const setIterator = (set = []) => {
  let iterator = set.values();

  return {
    next() {
      return iterator.next().value;
    },
  };
};

// Challenge 5
const indexIterator = (arr = []) => {
  let counter = 0;

  return {
    next() {
      let elem = [counter, arr[counter]];
      counter++;

      return elem;
    },
  };
};

// Challenge 6
function Words(string = '') {
  this.str = string;
  return this.str.split(' ');
}

Words.prototype[Symbol.iterator] = () => {
  let counter = 0;

  return {
    next() {
      return this[counter++];
    },
  };
};

// Challenge 7
const valueAndPrevIndex = (array = []) => {
  let counter = 0;

  return {
    sentence() {
      counter++;

      return counter === 1
        ? `${array[counter - 1]} - this is the first`
        : `${array[counter - 1]} was found after index ${counter - 2}`;
    },
  };
};

// Challenge 8
function* createConversation(string = '') {
  yield setInterval(() => {
    string === 'english'
      ? console.log('hello there')
      : console.log('gibberish');
  }, 3000);
}

// Challenge 9
const waitForVerb = (noun = '') => {
  const verb = 'walk';

  return new Promise((resolve) => {
    setTimeout(() => resolve(`${noun} ${verb}`), 3000);
  });
};

const f = async (noun) => await waitForVerb(noun);

// f('dog').then((res) => console.log('res', res));

module.exports = {
  sumFunc,
  returnIterator,
  nextIterator,
  sumArray,
  setIterator,
  indexIterator,
  Words,
  valueAndPrevIndex,
  createConversation,
};

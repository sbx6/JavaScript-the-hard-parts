// Challenge 1
const createFunction = (_) => () => 'hello';

// Challenge 2
const createFunctionPrinter = (input = 0) => () => input;

// Challenge3
const addByX = (x = 0) => (y = 0) => x + y;

// Challenge 4
const once = (func = () => {}) => {
  let counter = 0,
    result = 0;

  return (num = 0) => {
    if (counter === 0) {
      counter++;
      result = func(num);
      return result;
    }

    return result;
  };
};

// Challenge 5
const after = (count = 0, func = () => {}) => {
  let secondCounter = 0;

  return () => {
    secondCounter++;
    if (secondCounter === count) {
      return func();
    }
  };
};

// Challenge 6
const delay = (func = () => {}, wait = 1000, ...args) =>
  setTimeout(() => func(...args), wait);

// Challenge 7
const rollCall = (names = []) => {
  let counter = 0;

  return () =>
    names.length > counter ? names[counter++] : 'Everyone accounted for';
};

// Challenge 8
const saveOutput = (func = () => {}, magicWord = '') => {
  const obj = {};

  return (num) => (num !== magicWord ? (obj[num] = func(num)) : obj);
};

// Challenge 9
const cycleIterator = (array = []) => {
  let counter = 0;

  return () => {
    if (array.length > counter) return array[counter++];

    counter = 0;
    return array[counter++];
  };
};

// Challenge 10
const defineFirstArg = (func = () => {}, num1 = 1) => (num2 = 1) =>
  func(num1, num2);

// Challenge 11
const dateStamp = (func = () => {}) => {
  const obj = {};

  return (input = 1) => {
    obj.date = getTodayDate();
    obj.output = func(input);
    return obj;
  };
};

const getTodayDate = () => {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();

  return mm + '/' + dd + '/' + yyyy;
};

// Challenge 12
const censor = () => {
  const arr = [];

  return (...args) => {
    if (args.length > 1) return arr.push(args);

    let input = args[0];

    for (let [key, value] of arr) {
      input = input.replace(key, value);
    }

    return input;
  };
};

// Challenge 13
const createSecretHolder = (secret = 1) => {
  let newSecret = secret;

  return (newObj = {
    getSecret() {
      return newSecret;
    },

    setSecret(num) {
      newSecret = num;
    },
  });
};

// Challenge 14
const callTimes = () => {
  let counter = 1;

  return () => counter++;
};

// Challenge 15
const russianRoulette = (num = 1) => {
  let counter = 0;

  return () => {
    counter++;
    if (num === counter) return 'bang';

    return counter > num ? 'reload to play again' : 'click';
  };
};

// Challenge 16
const average = () => {
  let counter = 0,
    total = 0;

  return (num) => {
    if (num === undefined) return counter === 0 ? 0 : total / counter;

    counter++;
    return (total += num) / counter;
  };
};

// Challenge 17
const makeFuncTester = (arrOfTests = []) => {
  return (callback = () => {}) => {
    for (let [key, value] of arrOfTests) {
      return callback(key) === value;
    }
  };
};

// Challenge 18
const makeHistory = (limit = 1) => {
  const history = [];

  return (input = '') => {
    if (input !== 'undo') {
      if (history.length >= limit) history.shift();
      history.push(input);
      return input + ' done';
    }

    return history.length === 0 ? 'nothing to undo' : history.pop() + ' undone';
  };
};

// Challenge 19
const blackJack = (array = []) => {
  let dealerCount = 0;

  return (num1 = 1, num2 = 1) => {
    let counter = 0,
      result = num1 + num2;

    return () => {
      if (result === 'bust') return 'you are done!';

      dealerCount++;
      counter++;

      if (counter === 1) return result;

      result += array[dealerCount - 2];

      if (result > 21) {
        result = 'bust';
        dealerCount--;
      }

      return result;
    };
  };
};

module.exports = {
  createFunction,
  createFunctionPrinter,
  addByX,
  once,
  after,
  delay,
  rollCall,
  saveOutput,
  cycleIterator,
  defineFirstArg,
  dateStamp,
  getTodayDate,
  censor,
  createSecretHolder,
  callTimes,
  russianRoulette,
  average,
  makeFuncTester,
  makeHistory,
  blackJack,
};

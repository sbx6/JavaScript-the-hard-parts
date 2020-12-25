// Challenge 1
const addTwo = (num = 1) => num * 2;

// Challenge 2
const addS = (word = '') => `${word}s`;

// Challenge 3
const map = (listOfNum = [], callback = () => {}) =>
  listOfNum.map((item) => callback(item));

// Challenge 4
const forEach = (array = [], callback = () => {}) =>
  array.map((key) => callback(key));

// Challenge 5
const mapWith = (array = [], callback = () => {}) => {
  let result = [];

  array.forEach((elem) => result.push(callback(elem)));

  return result;
};

// Challenge 6
const reduce = (array = [], callback = () => {}, initialValue = 0) => {
  array.map((item) => (initialValue = callback(initialValue, item)));

  return initialValue;
};

// Challenge 7
const intersection = (...arrays) => {
  return arrays.reduce((acc, curr) => {
    return acc.filter((item) => {
      return curr.indexOf(item) !== -1;
    });
  });
};

// Challenge 8
const union = (...array) => {
  return array.reduce((acc, curr) => {
    const items = curr.filter((item) => !acc.includes(item));

    return [...acc, ...items];
  });
};

// Challenge 9
const objOfMatches = (array1 = [], array2 = [], callback = () => {}) => {
  return array2.reduce((acc, curr, index) => {
    if (curr === callback(array1[index])) acc[array1[index]] = curr;

    return acc;
  }, {});
};

// Challenge 10
const multiMap = (arrVals = [], arrCallbacks = () => {}) => {
  return arrVals.reduce((acc, curr) => {
    acc[curr] = arrCallbacks.map((item) => item(curr));

    return acc;
  }, {});
};

// Challenge 11
const objectFilter = (obj = {}, callback = () => {}) => {
  let newObj = {};

  for (let [key, value] of Object.entries(obj)) {
    if (callback(key) === value) newObj[key] = value;
  }

  return newObj;
};

// Challenge 12
const majority = (array = [], callback = () => {}) => {
  let truthy = 0,
    falsy = 0;

  array.forEach((item) => {
    callback(item) ? truthy++ : falsy++;
  });

  return truthy > falsy;
};

// Challenge 13
const prioritize = (array = [], callback = () => {}) =>
  array.sort((a, b) => callback(b) - callback(a));

// Challenge 14
const countBy = (array = [], callback = () => {}) => {
  return array.reduce((acc, curr) => {
    acc[callback(curr)] = array.filter(
      (item) => callback(item) === callback(curr)
    ).length;

    return acc;
  }, {});
};

// Challenge 15
const groupBy = (array = [], callback = () => {}) => {
  return array.reduce((acc, curr) => {
    (acc[callback(curr)] = acc[callback(curr)] || []).push(curr);

    return acc;
  }, {});
};

// Challenge 16
const goodKeys = (obj = {}, callback = () => {}) => {
  let newArr = [];

  for (let [key, value] of Object.entries(obj)) {
    if (callback(value)) newArr.push(key);
  }

  return newArr;
};

// Challenge 17
const commutative = (func1 = () => {}, func2 = () => {}, value = 1) =>
  func2(func1(value)) === func1(func2(value));

// Challenge 18
const objFilter = (obj = {}, callback = () => {}) => {
  const newObj = {};

  for (let [key, value] of Object.entries(obj)) {
    if (value === callback(parseInt(key))) newObj[key] = value;
  }

  return newObj;
};
// Challenge 19
const rating = (arrOfFunc = [], value = 1) =>
  (arrOfFunc.filter((item) => item(value)).length / arrOfFunc.length) * 100;

// Challenge 20
const pipe = (arrOfFunc = [], value = 1) => {
  return arrOfFunc.reduce((result, callback) => {
    return callback(result) || callback(value);
  }, '');
};

// Challenge 21
const highestFunc = (objOfFunc = {}, subject = 1) => {
  let message = '',
    maxValue = 0;

  for (let [key, value] of Object.entries(objOfFunc)) {
    if (value(subject) > maxValue) {
      maxValue = value(subject);
      message = key;
    }
  }

  return message;
};

// Challenge 22
const combineOperations = (startVal = 1, arrOfFuncs = []) => {
  return arrOfFuncs.reduce((acc, curr) => {
    return curr(acc) || curr(startVal);
  }, startVal);
};

// Challenge 23
const myFunc = (array = [], callback = () => {}) => array.findIndex(callback);

// Challenge 24
const myForEach = (array = [], callback = () => {}) => {
  return array.map((item) => {
    return callback(item);
  });
};

module.exports = {
  addTwo,
  addS,
  map,
  forEach,
  mapWith,
  reduce,
  intersection,
  union,
  objOfMatches,
  multiMap,
  objectFilter,
  majority,
  prioritize,
  countBy,
  groupBy,
  goodKeys,
  commutative,
  objFilter,
  rating,
  pipe,
  highestFunc,
  combineOperations,
  myFunc,
  myForEach,
};

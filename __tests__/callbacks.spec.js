const {
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
} = require('../callbacks/resloved');

const capitalize = (str) => str.toUpperCase(),
  addLowerCase = (str) => str + str.toLowerCase(),
  repeat = (str) => str + str,
  capAddlowRepeat = [capitalize, addLowerCase, repeat],
  isEven = (n) => n % 2 === 0,
  greaterThanFour = (n) => n > 4,
  isSquare = (n) => Math.sqrt(n) % 1 === 0,
  hasSix = (n) => n.toString().includes('6'),
  checks = [isEven, greaterThanFour, isSquare, hasSix];

describe('Testing Callbacks and Higher-Order Challenges', () => {
  // Challenge 1
  test('Challenge 1', () => {
    expect(addTwo(3)).toBe(6);
  });

  // Challenge 2
  test('Challenge 2', () => {
    expect(addS('pizza')).toBe('pizzas');
  });

  // Challenge 3
  test('Challenge 3', () => {
    expect(map([1, 2, 3, 4, 5], addTwo)).toStrictEqual([2, 4, 6, 8, 10]);
  });

  // Challenge 4
  test('Challenge 4', () => {
    let alphabet = '';

    forEach(['a', 'b', 'c', 'd'], (char) => {
      alphabet += char;
    });

    expect(alphabet).toBe('abcd');
  });

  // Challenge 5
  test('Challenge 5', () => {
    expect(mapWith([1, 2, 3], addTwo)).toStrictEqual([2, 4, 6]);
  });

  //Challenge 6
  test('Challenge 6', () => {
    expect(
      reduce(
        [4, 1, 3],
        (a, b) => {
          return a + b;
        },
        0
      )
    ).toBe(8);
  });

  test('Challenge 7', () => {
    expect(
      intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20])
    ).toEqual([5, 15]);
  });

  test('Challenge 8', () => {
    expect(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5])).toEqual([
      5,
      10,
      15,
      88,
      1,
      7,
      100,
    ]);
  });

  test('Challenge 9', () => {
    expect(
      objOfMatches(
        ['hi', 'howdy', 'bye', 'later', 'hello'],
        ['HI', 'Howdy', 'BYE', 'LATER', 'hello'],
        (str) => str.toUpperCase()
      )
    ).toEqual({ bye: 'BYE', hi: 'HI', later: 'LATER' });
  });

  test('Challenge 10', () => {
    expect(
      multiMap(
        ['catfood', 'glue', 'beer'],
        [
          (str) => str.toUpperCase(),
          (str) => str[0].toUpperCase() + str.slice(1).toLowerCase(),
          (str) => str + str,
        ]
      )
    ).toEqual({
      catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'],
      glue: ['GLUE', 'Glue', 'glueglue'],
      beer: ['BEER', 'Beer', 'beerbeer'],
    });
  });

  test('Challenge 11', () => {
    expect(
      objectFilter(
        {
          London: 'LONDON',
          LA: 'Los Angeles',
          Paris: 'PARIS',
        },
        (city) => city.toUpperCase()
      )
    ).toEqual({
      London: 'LONDON',
      Paris: 'PARIS',
    });
  });

  test('Challenge 12', () => {
    expect(majority([1, 2, 3, 4, 5], (num) => num % 2 === 1)).toBeTruthy();
  });

  test('Challenge 13', () => {
    expect(
      prioritize(
        ['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'],
        (str) => str[0] === 's' || str[0] === 'S'
      )
    ).toEqual(['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']);
  });

  test('Challenge 14', () => {
    expect(
      countBy([1, 2, 3, 4, 5], (num) => {
        if (num % 2 === 0) return 'even';
        else return 'odd';
      })
    ).toEqual({ odd: 3, even: 2 });
  });

  test('Challenge 15', () => {
    expect(groupBy([1.3, 2.1, 2.4], (num) => Math.floor(num))).toEqual({
      1: [1.3],
      2: [2.1, 2.4],
    });
  });

  test('Challenge 16', () => {
    expect(
      goodKeys(
        {
          mac: 'priest',
          dennis: 'calculating',
          charlie: 'birdlaw',
          dee: 'bird',
          frank: 'warthog',
        },
        (str) => str.slice(0, 4).toLowerCase() === 'bird'
      )
    ).toEqual(['charlie', 'dee']);
  });

  test('Challenge 17', () => {
    expect(
      commutative(
        (n) => n * 3,
        (n) => n / 4,
        11
      )
    ).toBeTruthy();
  });

  test('Challenge 18', () => {
    expect(
      objFilter(
        {
          6: 3,
          2: 1,
          12: 4,
        },
        (n) => n / 2
      )
    ).toEqual({ 2: 1, 6: 3 });
  });

  test('Challenge 19', () => {
    expect(rating(checks, 64)).toBe(100);
  });

  test('Challenge 20', () => {
    expect(pipe(capAddlowRepeat, 'cat')).toBe('CATcatCATcat');
  });

  test('Challenge 21', () => {
    expect(
      highestFunc(
        {
          double: (n) => n * 2,
          addTen: (n) => n + 10,
          inverse: (n) => n * -1,
        },
        5
      )
    ).toBe('addTen');
  });

  test('Challenge 22', () => {
    expect(
      combineOperations(0, [
        (num) => num + 100,
        (num) => num / 5,
        (num) => num * 3,
      ])
    ).toBe(60);
  });

  test('Challenge 23', () => {
    expect(myFunc([2, 3, 6, 64, 10, 8, 12], (num) => num % 2 !== 0)).toBe(1);
  });

  test('Challenge 24', () => {
    let sum = 0;
    myForEach([1, 2, 3], (num) => (sum += num));
    expect(sum).toBe(6);
  });
});

const {
  sumFunc,
  returnIterator,
  nextIterator,
  sumArray,
  setIterator,
  indexIterator,
  Words,
  valueAndPrevIndex,
  createConversation,
} = require('../iterators/resolved');

describe('Iterators', () => {
  // Challenge 1
  test('Challenge 1', () => {
    expect(sumFunc([1, 2, 3, 4])).toBe(10); // -> should log 10
  });

  // Challenge 1.1
  test('Challenge 1.1', () => {
    const myIterator = returnIterator(['a', 'b', 'c', 'd']);

    expect(myIterator()).toBe('a');
    expect(myIterator()).toBe('b');
    expect(myIterator()).toBe('c');
    expect(myIterator()).toBe('d');
  });

  // Challenge 2
  test('Challenge 2', () => {
    const iteratorWithNext = nextIterator([1, 2, 3]);

    expect(iteratorWithNext.next()).toBe(1);
    expect(iteratorWithNext.next()).toBe(2);
    expect(iteratorWithNext.next()).toBe(3);
  });

  // Challenge 3
  test('Challenge 3', () => {
    expect(sumArray([1, 2, 3, 4])).toBe(10);
  });

  // Challenge 4
  test('Challenge 4', () => {
    const mySet = new Set('hey'),
      iterateSet = setIterator(mySet);

    expect(iterateSet.next()).toBe('h');
    expect(iterateSet.next()).toBe('e');
    expect(iterateSet.next()).toBe('y');
  });

  // Challenge 5
  test('Challenge 5', () => {
    const iteratorWithIndex = indexIterator(['a', 'b', 'c', 'd']);

    expect(iteratorWithIndex.next());
    expect(iteratorWithIndex.next());
    expect(iteratorWithIndex.next());
  });

  // Challenge 6
  test('Challenge 6', () => {
    const helloWorld = new Words('Hello World');

    expect(helloWorld[0]).toBe('Hello');
    expect(helloWorld[1]).toBe('World');
  });

  // Challenge 7
  test('Challenge 7', () => {
    const returnedSentence = valueAndPrevIndex([4, 5, 6]);

    expect(returnedSentence.sentence()).toBe('4 - this is the first');
    expect(returnedSentence.sentence()).toBe('5 was found after index 0');
    expect(returnedSentence.sentence()).toBe('6 was found after index 1');
  });

  // Challenge 8
  test('Challenge 8', () => {
    jest.useFakeTimers();
    const logSpy = jest.spyOn(console, 'log');

    createConversation('english').next();

    jest.advanceTimersByTime(3000);

    expect(logSpy).toBeCalledWith('hello there');

    expect(setInterval).toHaveBeenCalledTimes(1);
    expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 3000);

    jest.clearAllTimers();
    logSpy.mockRestore();
  });
});

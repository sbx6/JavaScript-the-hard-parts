const {
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
} = require('../closures/resolved');

describe('Closures, Scope, and Execution Context', () => {
  // Challenge 1
  test('Challenge 1', () => {
    expect(createFunction()()).toBe('hello');
  });

  // Challenge 2
  test('Challenge 2', () => {
    expect(createFunctionPrinter(2)()).toBe(2);
  });

  // Challenge 3
  test('Challenge 3', () => {
    expect(addByX(2)(3)).toBe(5);
  });

  // Challenge 4
  test('Challenge 4', () => {
    const addByTwo = addByX(2),
      onceFunc = once(addByTwo);

    expect(onceFunc(4)).toBe(6);
    expect(onceFunc(10)).toBe(6);
    expect(onceFunc(9001)).toBe(6);
  });

  // Challenge 5
  test('Challenge 5', () => {
    const afterCalled = after(3, () => 'hello');

    expect(afterCalled()).toBe(undefined);
    expect(afterCalled()).toBe(undefined);
    expect(afterCalled()).toBe('hello');
  });

  // Challenge 6
  test('Challenge 6', async () => {
    let result = await new Promise((resolve) =>
      delay(() => resolve('Test'), 1000)
    );

    expect(result).toBe('Test');
  }, 1500);

  // Challenge 7
  test('Challenge 7', () => {
    const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth']);

    expect(rollCaller()).toBe('Victoria');
    expect(rollCaller()).toBe('Juan');
    expect(rollCaller()).toBe('Ruth');
    expect(rollCaller()).toBe('Everyone accounted for');
  });

  // Challenge 8
  test('Challenge 8', () => {
    const multBy2AndLog = saveOutput((num) => num * 2, 'boo');

    expect(multBy2AndLog(2)).toBe(4);
    expect(multBy2AndLog(9)).toBe(18);
    expect(multBy2AndLog('boo')).toEqual({ 2: 4, 9: 18 });
  });

  // Challenge 9
  test('Challenge 9', () => {
    const getDay = cycleIterator(['Fri', 'Sat', 'Sun']);

    expect(getDay()).toBe('Fri');
    expect(getDay()).toBe('Sat');
    expect(getDay()).toBe('Sun');
    expect(getDay()).toBe('Fri');
    expect(getDay()).toBe('Sat');
  });

  // Challenge 10
  test('Challenge 10', () => {
    const subFrom20 = defineFirstArg((big, small) => big - small, 20);

    expect(subFrom20(5)).toBe(15);
  });

  // Challenge 11
  test('Challenge 11', () => {
    const stampedMultBy2 = dateStamp((n) => n * 2);

    expect(stampedMultBy2(4)).toEqual({
      date: getTodayDate(),
      output: 8,
    });

    expect(stampedMultBy2(6)).toEqual({
      date: getTodayDate(),
      output: 12,
    });
  });

  // Challenge 12
  test('Challenge 12', () => {
    const changeScene = censor();
    changeScene('dogs', 'cats');
    changeScene('quick', 'slow');

    expect(changeScene('The quick, brown fox jumps over the lazy dogs.')).toBe(
      'The slow, brown fox jumps over the lazy cats.'
    );
  });

  // Challenge 13
  test('Challenge 13', () => {
    const obj = createSecretHolder(5);

    expect(obj.getSecret()).toBe(5);
    obj.setSecret(2);
    expect(obj.getSecret()).toBe(2);
  });

  // Challenge 14
  test('Challenge 14', () => {
    let myNewFunc1 = callTimes(),
      myNewFunc2 = callTimes();

    expect(myNewFunc1()).toBe(1);
    expect(myNewFunc1()).toBe(2);
    expect(myNewFunc2()).toBe(1);
    expect(myNewFunc2()).toBe(2);
    expect(myNewFunc2()).toBe(3);
  });

  // Challenge 15
  test('Challenge 15', () => {
    const play = russianRoulette(3);

    expect(play()).toBe('click');
    expect(play()).toBe('click');
    expect(play()).toBe('bang');
    expect(play()).toBe('reload to play again');
  });

  // Challenge 16
  test('Challenge 16', () => {
    const avgSoFar = average();

    expect(avgSoFar()).toBe(0);
    expect(avgSoFar(4)).toBe(4);
    expect(avgSoFar(8)).toBe(6);
    expect(avgSoFar()).toBe(6);
    expect(avgSoFar(12)).toBe(8);
    expect(avgSoFar()).toBe(8);
  });

  // Challenge 17
  test('Challenge 17', () => {
    const shouldCapitalizeLast = makeFuncTester([
      ['hello', 'hellO'],
      ['goodbye', 'goodbyE'],
      ['howdy', 'howdY'],
    ]);

    expect(shouldCapitalizeLast((str) => str.toUpperCase())).toBe(false);
    expect(
      shouldCapitalizeLast(
        (str) => str.slice(0, -1) + str.slice(-1).toUpperCase()
      )
    ).toBe(true);
  });

  // Challenge 18
  test('Challenge 18', () => {
    const myActions = makeHistory(2);

    expect(myActions('jump')).toBe('jump done');
    expect(myActions('undo')).toBe('jump undone');
    expect(myActions('walk')).toBe('walk done');
    expect(myActions('code')).toBe('code done');
    expect(myActions('pose')).toBe('pose done');
    expect(myActions('undo')).toBe('pose undone');
    expect(myActions('undo')).toBe('code undone');
    expect(myActions('undo')).toBe('nothing to undo');
  });

  // Challenge 19
  test('Challenge 19', () => {
    const deal = blackJack([
      2,
      6,
      1,
      7,
      11,
      4,
      6,
      3,
      9,
      8,
      9,
      3,
      10,
      4,
      5,
      3,
      7,
      4,
      9,
      6,
      10,
      11,
    ]);

    /*** PLAYER 1 ***/
    const i_like_to_live_dangerously = deal(4, 5);

    expect(i_like_to_live_dangerously()).toBe(9);
    expect(i_like_to_live_dangerously()).toBe(11);
    expect(i_like_to_live_dangerously()).toBe(17);
    expect(i_like_to_live_dangerously()).toBe(18);
    expect(i_like_to_live_dangerously()).toBe('bust');
    expect(i_like_to_live_dangerously()).toBe('you are done!');
    expect(i_like_to_live_dangerously()).toBe('you are done!');

    /*** BELOW LINES ARE FOR THE BONUS ***/

    /*** PLAYER 2 ***/
    const i_TOO_like_to_live_dangerously = deal(2, 2);
    expect(i_TOO_like_to_live_dangerously()).toBe(4);
    expect(i_TOO_like_to_live_dangerously()).toBe(15);
    expect(i_TOO_like_to_live_dangerously()).toBe(19);
    expect(i_TOO_like_to_live_dangerously()).toBe('bust');
    expect(i_TOO_like_to_live_dangerously()).toBe('you are done!');
    expect(i_TOO_like_to_live_dangerously()).toBe('you are done!');

    // // /*** PLAYER 3 ***/
    const i_ALSO_like_to_live_dangerously = deal(3, 7);
    expect(i_ALSO_like_to_live_dangerously()).toBe(10);
    expect(i_ALSO_like_to_live_dangerously()).toBe(13);
    expect(i_ALSO_like_to_live_dangerously()).toBe('bust');
    expect(i_ALSO_like_to_live_dangerously()).toBe('you are done!');
    expect(i_ALSO_like_to_live_dangerously()).toBe('you are done!');
  });
});

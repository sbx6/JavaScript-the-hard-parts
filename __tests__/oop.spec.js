const {
  makePerson,
  personStore,
  personFromPersonStore,
  PersonConstructor,
  personFromConstructor,
  PersonClass,
  DeveloperClass,
  adminFactory,
  mixin,
} = require('../oop/resolved');

describe('Object-Oriented', () => {
  // Challenge 1
  test('Challenge 1', () => {
    const vicky = makePerson('Vicky', 24);

    expect(vicky.name).toBe('Vicky');
    expect(vicky.age).toBe(24);
  });

  // Challenge 2
  test('Challenge 2', () => {
    const result = personStore.greet();

    expect(result).toBe('hello');
  });

  // Challenge 3
  test('Challenge 3', () => {
    const sandra = personFromPersonStore('Sandra', 26);

    expect(sandra.name).toBe('Sandra');
    expect(sandra.age).toBe(26);
    expect(sandra.greet()).toBe('hello');
  });

  // Challenge 4
  test('Challenge 4', () => {
    const sandra = personFromPersonStore('Sandra', 26);

    personStore.introduce = function () {
      return `Hi, my name is ${this.name}`;
    };

    expect(sandra.introduce()).toBe('Hi, my name is Sandra');
  });

  // Challenge 5
  test('Challenge 5', () => {
    const simon = new PersonConstructor();

    expect(simon.greet()).toBe('hello');
  });

  // Challenge 6
  test('Challenge 6', () => {
    const mike = personFromConstructor('Mike', 30);

    expect(mike.name).toBe('Mike');
    expect(mike.age).toBe(30);
    expect(mike.greet()).toBe('hello');
  });

  // Challenge 7
  test('Challenge 7', () => {
    const mike = personFromConstructor('Mike', 30);

    PersonConstructor.prototype.introduce = function () {
      return `Hi, my name is ${this.name}`;
    };

    expect(mike.introduce()).toBe('Hi, my name is Mike');
  });

  // Challenge 8
  test('Challenge 8', () => {
    const george = new PersonClass();

    expect(george.greet()).toBe('hello');
  });

  // Challenge 9
  test('Challenge 9', () => {
    const thai = new DeveloperClass('Thai', 32);

    expect(thai.name).toBe('Thai');
    expect(thai.introduce()).toBe('Hello World, my name is Thai');
  });

  // Challenge 'Subclassing'
  test('Subclassing', () => {
    const adminFromFactory = adminFactory('Eva', 5);

    expect(adminFromFactory.sayType()).toBe('I am a Admin');
    expect(adminFromFactory.sharePublicMessage()).toBe('Welcome users!');
  });

  // Challenge 'Mixins'
  test('Mixins', () => {
    expect(mixin.speak()).toBe('I have 4 legs and am made of metal');
  });
});

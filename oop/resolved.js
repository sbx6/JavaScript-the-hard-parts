// Challenge 1
const makePerson = (name = '', age = 1) => {
  const person = {};

  person.name = name;
  person.age = age;

  return person;
};

// Challenge 2
const personStore = {
  greet: () => 'hello',
};

// Challenge 3
const personFromPersonStore = (name = '', age = 1) => {
  const person = Object.create(personStore);

  person.name = name;
  person.age = age;

  return person;
};

// Challenge 4
personStore.introduce = function () {
  return `Hi, my name is ${this.name}`;
};

// Challenge 5
function PersonConstructor() {
  this.greet = () => 'hello';
}

// Challenge 6
const personFromConstructor = (name = '', age = 1) => {
  const person = new PersonConstructor();

  person.name = name;
  person.age = age;

  return person;
};

// Challenge 7
PersonConstructor.prototype.introduce = function () {
  return `Hi, my name is ${this.name}`;
};

// Challenge 8
class PersonClass {
  constructor(name = '') {
    this.name = name;
  }

  greet() {
    return 'hello';
  }
}

// Challenge 9
class DeveloperClass extends PersonClass {
  constructor(name = '', age = 1) {
    super(name);
    this.age = age;
  }

  introduce() {
    return `Hello World, my name is ${this.name}`;
  }
}

/****************************************************************
                  EXTENSION: SUBCLASSING
 ****************************************************************/
const userFunctionStore = {
  sayType: function () {
    return `I am a ${this.type}`;
  },
};

const userFactory = (name = '', score = 1) => {
  const user = Object.create(userFunctionStore);

  user.type = 'User';
  user.name = name;
  user.score = score;

  return user;
};

// Challenge 10
const adminFunctionStore = Object.create(userFunctionStore);

// Challenge 11
const adminFactory = (name = '', score = 1) => {
  // Challenge 13
  const admin = Object.assign(adminFunctionStore, userFactory(name, score));

  // Challenge 12
  admin.type = 'Admin';

  return admin;
};

// Challenge 14
adminFunctionStore.sharePublicMessage = () => {
  return 'Welcome users!';
};

/****************************************************************
                  EXTENSION: MIXINS
 ****************************************************************/
class Dog {
  constructor() {
    this.legs = 4;
  }
  speak() {
    console.log('Woof!');
  }
}

const robotMixin = {
  skin: 'metal',
  speak: function () {
    return `I have ${this.legs} legs and am made of ${this.skin}`;
  },
};

let robotFido = new Dog();

// Challenge 15
const mixin = Object.assign(robotFido, robotMixin);

module.exports = {
  makePerson,
  personStore,
  personFromPersonStore,
  PersonConstructor,
  personFromConstructor,
  PersonClass,
  DeveloperClass,
  adminFactory,
  mixin,
};

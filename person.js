class Person {
  constructor(name) {
    this.name = name;
  }

  sayMyName() {
    return `May name is ${this.name}!`;
  }
}

module.exports = {
  Person,
};

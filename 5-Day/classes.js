class Animal {
  constructor() {
    console.log("THIS KEYWORD:", this);
    console.log("This is constructor from Animal class");
  }
  moves = true;
}

class Rabbit extends Animal {
  constructor() {
    super();
    console.log("This is constructor from Rabbit class");
  }
  eats = true;
}

let r = new Rabbit();

class Person {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

class Employee extends Person {
  constructor(name, id) {
    super(name);
    this.id = id;
  }

  getID() {
    return this.id;
  }
}

let emp = new Employee("Manikandan Anbalagan", "E101");
console.log("Employee get name:", emp.getName());
console.log("Employee get id:", emp.get());

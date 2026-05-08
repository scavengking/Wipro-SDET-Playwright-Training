// Inheritance

class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`${this.name} says hello.`);
  }
}

class Student extends Person {
  constructor(name, course) {
    super(name);
    this.course = course;
  }

  study() {
    console.log(`${this.name} is studying ${this.course}.`);
  }
}

const student1 = new Student("Krishna", "JavaScript");

student1.greet();
student1.study();

//Polymorphism

class Animal {
  sound() {
    console.log("Animal makes a sound");
  }
}

class Dog extends Animal {
  sound() {
    console.log("Dog barks");
  }
}

class Cat extends Animal {
  sound() {
    console.log("Cat meows");
  }
}

const dog = new Dog();
const cat = new Cat();

dog.sound();
cat.sound();

//Abstraction
class CoffeeMachine {
  startMachine() {
    this.#boilWater();
    console.log("Coffee is ready");
  }

  #boilWater() {
    console.log("Boiling water...");
  }
}

const coffee = new CoffeeMachine();

coffee.startMachine();

//Encapsulation

class BankAccount {
  #balance = 0;

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited ₹${amount}`);
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const user = new BankAccount();

user.deposit(1000);

console.log(user.getBalance());
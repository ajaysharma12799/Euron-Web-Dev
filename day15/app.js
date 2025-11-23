console.log("Hello from Day 15");

// Hoisting Concept

// console.log("Age:", age);
// var age = 25;
// console.log("Age after declaration:", age);

// greet();

// function greet() {
//   // Function Declaration
//   console.log("Greetings from the greet function!");
// }

// // sayGoodbye();

// var sayGoodbye = () => {
//   // Function Expression
//   console.log("Goodbye from the sayGoodbye arrow function!");
// };

/**
 * OOP's Concept
 * 1. JS originnally was Prototype based language
 */
// const person = {};
// console.log("Person Object: ", person);

// function constructor
// function Person(fullName, fullAge) {
//   this.name = fullName;
//   this.age = fullAge;
// }

// function Employee(fullName, fullAge, empId) {
//   this.name = fullName;
//   this.age = fullAge;
//   this.empId = empId;
// }

// const imran = new Person("Imran Ali", 30);

// const ujjawal = new Person("Ujjawal", 25);

// const ajayEmp = new Employee("Ajay Kumar", 28, "E12345");

// console.log("Imran Object: ", imran);

// console.log("Ujjawal Object: ", ujjawal);

// console.log("Ajay Object: ", ajayEmp);

// Class based OOP's
// class User {
//   // constructor() {} // default constructor

//   constructor(username, email, loginId) {
//     // parameterized constructor
//     this.username = username;
//     this.email = email;
//     this.loginId = loginId;
//   }
// }

// const user1 = new User("ajaysharma12799", "ajay@example.com", "USR001");
// console.log("User1 Object: ", user1);

/**
 * Pillars of OOP's
 * 1. Abstraction
 * 2. Encapsulation
 * 3. Polymorphism
 * 4. Inheritance
 */

// Abstraction & Encapsulation
// class Employee {
//   #salary = 0; // private field
//   constructor(name, salary) {
//     this.name = name;
//     this.#salary = salary;
//   }

//   // Getter Method
//   getSalary() {
//     return this.#salary;
//   }

//   // Setter Method
//   setSalary(newSalary) {
//     this.#salary = newSalary;
//   }

//   calculateYearlySalary() {
//     return this.#salary * 12;
//   }
// }

// const ajayEmp = new Employee("Ajay", 50000);
// console.log("Ajay's Salary (using getter): ", ajayEmp.getSalary());
// ajayEmp.setSalary(60000);
// console.log("Ajay's Updated Salary (using getter): ", ajayEmp.getSalary());

// const ujjawalEmp = new Employee("Ujjawal", 55000);
// console.log("Ujjawal's Salary (using getter): ", ujjawalEmp.getSalary());
// ujjawalEmp.setSalary(70000);
// console.log(
//   "Ujjawal's Updated Salary (using getter): ",
//   ujjawalEmp.getSalary()
// );

// Inheritance & Polymorphism
class Animal {
  // Base Class/Parent Class
  speak() {
    console.log("Animal makes a sound");
  }
}

class Dog extends Animal {
  // Derived Class/Child Class
  speak() {
    console.log("Dog barks");
  }
}

class Cat extends Animal {
  // Derived Class/Child Class
  speak() {
    console.log("Cat meows");
  }
}

const labra = new Dog();
const persianCat = new Cat();

labra.speak();
persianCat.speak();

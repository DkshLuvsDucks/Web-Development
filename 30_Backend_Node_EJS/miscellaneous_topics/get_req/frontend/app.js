// OOPS in JS
let arr = [1,2,3];
let arr2 = [2,4,6];

arr.sayHello = () => {
    console.log("Hello!!!");
};

arr2.sayHello = () => {
    console.log("Hello!!!");
};

// Object Prototypes
arr.__proto__.push = (n) => {console.log(`pushed ${n}`)};

console.log(Array.prototype);

console.log(String.prototype);

console.log(arr.sayHello === arr2.sayHello);
console.log("abc".toLowerCase === "xyz".toLowerCase);

// Factory function
function PersonMaker(name, age){
    const person = {
        name: name,
        age: age,
        talk(){
            console.log(`Hi, my name is ${name} and I'm ${age} years old...`);
        }
    };

    return person;
}

let p1 = PersonMaker("Daksh", 21);
p1.talk();

// disadvantage : it is creating copies of same function
let p2 = PersonMaker("Gauransh", 21);
p2.talk();

console.log(p1.talk === p2.talk);

// Better approach => using New
function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.talk = function () {
    console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old...`);
}

let p3 = new Person("adam", 25);
let p4 = new Person("eve", 25);

console.log(p3.talk === p4.talk);


// Class is the Best approach to fix this issue:
class PersonClass{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old...`);
    }
}

let p5 = new PersonClass("Daksh", 22);
let p6 = new PersonClass("Aditya", 23);

console.log(p5.talk === p6.talk);

// Inheritence
class Student extends PersonClass{
    constructor(name, age, marks){
        super(name,age); // parent class constructor is called
        this.marks = marks;
    }   
    greet(){
        console.log(`Hi, I am ${this.name}.`);
    }
}

let stu1 = new Student("Daksh", 21, 72);


class Teacher{
    constructor(name, age, subject){
        super(name, age);
        this.subject = subject;
    }
    greet(){
        console.log(`Hello, I am Prof. ${this.name}.`);
    }
}

// ------------------------------------------------

class Mammal{
    constructor(name){
        this.name = name;
        this.type = "warm-blooded";
    }
    eat(){
        console.log("eats... nom nom!!!");
    }
}

class Dog extends Mammal{
    constructor(name){
        super(name);
    }
    bark(){
        console.log("woof woof!");
    }
}


class Cat extends Mammal{
    constructor(name){
        super(name);
    }
    meow(){
        console.log("MAAOOOOOOWWWW!");
    }
}

// JS (OOP) Summary Sheet

// Qs1. What is Object-Oriented Programming (OOP)?
// Ans: Object-Oriented Programming (OOP) is a programming paradigm in computer science that relies on the concept of 
// classes and objects. It is used to structure a software program into simple, reusable pieces of code blueprints 
// (usually called classes), which are used to create individual instances called objects.

// Qs2. What are some benefits of using OOP in JavaScript?
// Ans: Some benefits of using OOP in JavaScript include:
// a. Improved code organization (structure of code)
// b. Reusability of code
// c. Better maintainability of code
// d. Closeness to real-world objects

// Qs3. What is the difference between an object and a class in JavaScript?
// Ans: Objects in JavaScript are standalone entities with properties, methods, and a type. They can be 
// created directly from functions or through constructor functions.
// Classes in JavaScript act as blueprints for creating objects.

// Qs4. What is a constructor function in JavaScript?
// Ans: A constructor function is a special function used to create and initialize objects in JavaScript. 
// When a new object is created using a constructor function, it is automatically assigned a set of properties 
// and methods that are defined within the function.

// Qs5. What is a prototype chain in JavaScript?
// Ans: Every object in JavaScript has a built-in property called its prototype. The prototype itself is an object, 
// so the prototype will have its own prototype, making what is called a prototype chain. The chain ends when we 
// reach a prototype that has null for its own prototype.

// Qs6. What is the difference between a constructor and a class in JavaScript?
// Ans: A constructor is a function that creates an object, while a class is a blueprint for creating objects. 
// Classes define the framework, whereas constructors actually create the objects and initialize them. (In JavaScript, 
// classes are syntactic sugar over constructor functions.)

// Qs7. Why is the “new” keyword used in JavaScript?
// Ans: The new keyword is used to create an instance of an object. When used with a constructor function, 
// it creates a new object and sets the constructor function’s this keyword to point to the new object.

// Qs8. What is Inheritance in OOP?
// Ans: Inheritance in OOP is defined as the ability of a class to derive properties and characteristics from 
// another class while having its own properties as well.

// Qs9. What is the “super” keyword in JavaScript?
// Ans: The super keyword in JavaScript acts as a reference variable to the parent class. It is mainly used 
// when we want to access a variable, method, or constructor in the base class from the derived class.
a = 10;
b = 5;
a + b;

typeof a; //number

// Datatypes in JS
// number 
// boolean
// string 
// undefined
// null
// BigInt
// Symbol

name = "jeffery";
typeof name; // string 
let isAdult = false; // bool


// Operations
a+b;
a*b;
a-b;
a/b;
a%b;


// NaN - Not a Number
// example
c=0/0;
typeof NaN; //number

// NaN operations always result in NaN


// Let keyword
// let age = 21;
// age = age+1; // can be modified

// Const keyword
const pi = 3.14; // cant be change after declaration

// var keyword
var area = 20; // old syntax 

// assignment operator
area+=1;
area-=20;
age*=2;

// unary operator
age++;
++a;
--a;
age--;


// valid names (u can use dollar and underscores)
// $age
// age
// _age


// You can change type of variable
let age = 29;
age = "hello"
// this will change typr from number to string

let sentence = 'my name is "Daksh"';
sentence[0];
sentence[sentence.length-1];

// undefined type : variable that is not assigned a value
// null type : intentional absense of a value

// PQ
let name = "Daksh";
name.length;

let firstName = "Daksh";
firstName[0];
firstName[firstName.length-1];

name + 123; // Daksh123


// Console Log statements for printing  
console.log(name);
console.log("Hello", name, a);
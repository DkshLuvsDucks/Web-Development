let str1 = "             abc           ";
console.log(str1);
console.log(str1.trim()); // removes additional spaces
// strings are immutable in js

console.log(str1.toLowerCase().trim());
console.log(str1.toUpperCase().trim());

console.log(str1.indexOf("b"));

let str2 = "Daksh";
console.log(str2.slice(1,3)); // output: ak
console.log(str2.slice(1,str2.length)); // output: aksh
console.log(str2.slice(0,3)); // output: Dak
console.log(str2.slice(2)); // output: ksh
console.log(str2.slice(-2)); // output: sh

let str3 = "Hello World World!";
console.log(str3);
console.log(str3.replace("World", "User")); // Only first occurence is changed

let str4 = "Mango";
console.log(str4);
console.log(str4.repeat(4)); 

// Arrays
let students = ["Daksh", "Devesh", "Gauransh"];
console.log(students);
console.log(students[0]);
console.log(students.length);
console.log(students[10]);
console.log(typeof students);

console.log(students[1][0]);
console.log(students.length);
console.log(students[1].length);

students[0] = "DUZZ";
console.log(students);
students[10] = "Daksh";
console.log(students);

students.push("Abdur");
console.log(students);
students.pop();
students.push("Ahmed");
console.log(students);

students.unshift("Archit");
console.log(students);
students.shift();
console.log(students);

// PQ
let array = ["jan", "jul", "mar", "aug"];
array.shift();
array.shift();
array.unshift("jun");
array.unshift("jul");
console.log(array);


console.log("Index of Daksh: ", students.indexOf("Daksh"));
console.log("Student list includes Kunal: ", students.includes("Kunal"));



let primary = ["red", "blue", "yellow"];
let secondary = ["green", "violet", "orange"];
let allColors = primary.concat(secondary)
console.log(allColors);
primary.reverse();
console.log(primary);

console.log(allColors.slice(-2));
console.log(primary.slice(1));

console.log(allColors);
console.log(allColors.splice(4));
console.log(allColors);
console.log(allColors.splice(0,1));
console.log(allColors);
console.log(allColors.splice(0,1, "black", "grey"));
console.log(allColors);


let chars = ["b","c","d","a","e"];
console.log(chars);
chars.sort();
console.log(chars);

// PQ
let array2 = ["jan", "jul", "mar", "aug"];
console.log(array2);
array2.splice(0,2,"jul","jun");
console.log(array2);


[1] == [1]; // false (comparing mem address of 2 arrs)

let arr = [[1,2],[3,4]]; // nested array
let arr2 = [ ["X", null,"O"], [null, "X",null], ["O", null,"X"]];
console.log(arr2);
arr2[0].splice(1,1,"O");
console.log(arr2);


// Assignment
// Q1
let arr_1 = [1, 2, 3, 4];
let n = 3;
let ans_1 = arr.slice(0, n);
console.log(ans_1);

// Q2
let ans_2 = arr.slice(arr_1.length-n);
console.log(ans_2);

// Q3
let str_a1 = prompt("Enter a String");
if(str_a1.length==0){
    console.log("Empty String");
} else {
    console.log("Not empty");
}

// Q4
let str_a2 = "DaKsH";
let index = 3;
if(str_a2[index] == str_a2[index].toLowerCase()){
    console.log("lowercase");
} else {
    console.log("uppercase");
}

// Q5
let str_a3 = prompt ("please enter a string");
console.log(`original string = ${str}`);
console.log(`string without spaces = ${str.trim()}`);

// Q6
let arr_2 = ["hello",'a',23,64,99,-6];
let item = 64;
if(arr.indexOf(item)!=-1){
    console.log("element exists in array");
} else {
    console.log("element doesn't exist in array");
}
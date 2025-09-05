// this keyword
const student = {
    name: "Daksh",
    age: 15,
    spanish: 100,
    comp: 100,
    eng: 95,
    sst: 95,
    sci: 87,
    maths: 84,
    getAvg(){
        let avg = (this.spanish + this.comp + this.eng + this.sst + this.sci +this.maths)/6;
        console.log(avg);
        return avg;
    }
}

student.getAvg();

// try and catch statements
try{
    console.log(a);
} catch {
    console.log("variable a not defined");
}

// Arrow Functions
const sum = (a,b) => {
    console.log(a+b);
}
sum(34,35);

const sum_2 = (a,b) => a+b; //valid syntax
console.log(sum_2(34,35));

const cube = (a) => {
    console.log(a*a*a);
}
cube(3);

const pow = (a,b) => {
    console.log(a**b);
}
pow(3,10);

const mul = (a,b) => (
    a*b // we can skip return keyword
);
console.log(mul(2,3));


// Timeout Function
console.log("please wait :3");
setTimeout(() => {
    console.log("Good boy!");
}, 4000);
console.log("mwehehe...");

// Interval Function
// setInterval(() => {
//     console.log("Donatella VERSACE💜");
// }, 2000);
// this will run infinitely
// to make it stop after a while use
let id = setInterval(() => {
    console.log("Donatella VERSACE💜");
}, 2000);
// simulating time gap
setTimeout(() => {
    clearInterval(id);
}, 10000);

// Scope of Arrow Functions
const student_2 = {
    name: "Devesh",
    age: 21,
    marks: 84,
    prop: this, // global scope
    getName: function(){
        console.log(this); 
        return this.name;
    },
    getMarks: ()=>{
        console.log(this); // parent's scope -> window
        return this.marks; 
    },
    getInfo1: function(){
        setTimeout(() => {
            console.log("Info_1");
            console.log(this); // student
        }, 2000);
    },
    getInfo2: function(){
        setTimeout(function() {
            console.log("Info_2");
            console.log(this); // window
        }, 2000);
    }
};

console.log(student_2.getName());
console.log(student_2.getMarks());
student_2.getInfo1();
student_2.getInfo2();

// Arrow functions inherit "this" from parent's scope

// Practice Questions
// Q1
const sqr = n => n*n;
console.log(sqr(25));

// Q2
function printInterval(){
    let id = setInterval(() => {
        console.log("Hello World :3");
    }, 2000);
    setTimeout(() => {
        clearInterval(id);
    }, 10000);
}
printInterval();
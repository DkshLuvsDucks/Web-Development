// Functions
function hello(){
    console.log("Hewwo :3");
}
hello();
hello();
hello();

function printName(){
    console.log("DUZZ :v");
}
printName();

function print1to5(){
    for(let i=1; i<=5;i++){
        console.log(i);
    }
}
print1to5();

function isAdult(age){
    if(age>=18){
        console.log("Adult");
    } else {
        console.log("Not Adult");
    }
}
isAdult(17);

function rollDice(){
    console.log(Math.floor(Math.random()*6) + 1);
}
rollDice();
rollDice();
rollDice();
rollDice();
rollDice();
rollDice();


function printInfo(name, age){
    console.log(`${name}'s age is ${age}`);
}
printInfo("Daksh", 21);


function calcAvg(a,b,c){
    console.log(`Avg is ${(a+b+c)/3}`);
}
calcAvg(1,2,3);
calcAvg(12,38,48);

function printMulTable(num){
    for(let i=1; i<=10; i++){
        console.log(`${num} x ${i} = ${num * i}`);
    }
}
printMulTable(2);
printMulTable(12);  
printMulTable(15);
printMulTable(25);

function sum(a,b){
    return (a+b);
}

function sumToN (n){
    let sum=0;
    for(let i=1; i<=n; i++){
        sum += i;
    }
    return sum;
}

console.log(`Sum 1 to 15 : ${sumToN(15)}`);

function concatArray(arr){
    let str = "";
    for(let i=0; i<arr.length; i++){
        str += arr[i];
    }
    return str;
}

console.log(concatArray(['S','Y','B','A','U']));

{
    // const a = 2; // cant be used outside brackets
    var b = 2; // var scope lasts outside brackets
}

// console.log(a);
console.log(b);

function outerFunc(){
    let x = 5;
    function innerFunc() {
        console.log(x);
    }
    innerFunc(); // Lexical Scope
}


// Function Expression
const sum_2 = function(a,b,c){
    return (a+b+c);
}
console.log(sum_2(2,3,4));

// Higher order functions
function multipleGreet(func, n){
    for(let i=1; i<=n; i++){
        func();
    }
}

let greet = function(){
    console.log("HEWWO :3");
}

multipleGreet(greet,10);

function oddEvenTest(request){
    if(request=="odd"){
        return  function(n){
            console.log(!(n%2==0));
        }
    } else if(request=="even"){
        return  function(n){
            console.log(n%2==0);
        }
    } else {
        console.log("wrong request!");
    }
}

let request = "even";
let func = oddEvenTest(request);
console.log(func(5));
request = "odd";
func = oddEvenTest(request);
console.log(func(5));


// Methods
const calculator = {
    add: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
    mul: function(a,b){
        return a*b;
    }
}
// shorthand for above code
const calculator_2 = {
    add (a,b){
        return a+b;
    },
    sub (a,b){
        return a-b;
    },
    mul (a,b){
        return a*b;
    }
}
// Q1
let num = 10;
if(num%10==0){
    console.log("good");
} else {
    console.log("bad");
}

// Q2
let name = prompt("Enter Name");
let age = prompt("Enter Age");
alert(`${name} is ${age} years old`);

// Q3

let quarter = 2;
switch(quarter){
    case 1:
        console.log("Jan Feb Mar");
        break;

    case 2:
        console.log("Apr May Jun");
        break;
    
    case 3:
        console.log("Jul Aug Sept");
        break;
    
    case 4:
        console.log("Oct Nov Dec");
        break;
    
    default:
        console.log("NOT A QUARTER...");
    
}

// Q4
let str = prompt("Enter a string");
if(str.length>5 && (str[0]=="A" || str[0]=="a")){
    console.log("Golden String");
} else {
    console.log("Not a Golden String!");
}

// Q5

let a = 1;
let b = 2;
let c = 3;

if(a>b && a >c){
    console.log(`${a} is the largest.`);
} else if (b>a && b>c){
    console.log(`${b} is the largest.`);
} else {
    console.log(`${c} is the largest.`);
}

// Q6
let x = 32;
let y= 134312;
if(x%10==y%10){
    console.log(`${x} & ${y} have the same last number...`);
}
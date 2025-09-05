console.log("Hello World!")
console.log("My name is Daksh")
let a=1;
let b=2;
let output = "sum is ="+ (a+b);
console.log(output);

// Alternate way using back ticks
// Template Literals
output = `sum is = ${(a+b)}`;
console.log(output);


// Comparison Operators
let age=18;
if(age>=18){
    console.log(`Age : ${age}\nYou are eligible to vote!`);
}

let num=5;
console.log(num=="5"); // js ignores types and returns true for this comparison
console.log(num==="5"); // use "===" to compare types as well


let color = "red";
if(color=="green"){
    console.log("Go!");
} else if ( color=="yellow"){
    console.log("Slow Down!");
} else {
    console.log("STOP!");
}


let marks = 35;

if(marks>=90){
    console.log("A+");
} else if(marks>=80){
    console.log("A-");
} else if(marks>=70){
    console.log("B+");
} else if(marks>=60){
    console.log("B-");
} else if(marks>=50){
    console.log("C+");
} else if(marks>=40){
    console.log("C-");
} else if(marks>=35){
    console.log("D+");
} else if(marks>=30){
    console.log("D-");
} else {
    console.log("F");
}


// AND - && , OR - ||, NOT - !

// PQ

let string = "apple";
if(string[0]=="a" && (string.length) > 3){
    console.log("good string");
} else {
    console.log("bad string");
}


// Switch
let color_light="red";
switch(color_light){
    case "green":
        console.log("GO!!!");
        break;
    case "yellow":
        console.log("SLOW DOWN!!!");
        break;
    case "red":
        console.log("STOP!!!");
        break;
    default:
        console.log("BROKEN LIGHT!")
}

let num_day=3;
switch(num_day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Enter a valid number")
}

alert("you're GAY!");
console.error("this is an error msg :3");
let text = prompt("Enter Text:");
console.warn(text);
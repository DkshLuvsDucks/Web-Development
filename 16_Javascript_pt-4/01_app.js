console.log("Counting in order: ");
for(let i=0; i<=10; i++){
    console.log(i);
}

console.log("Counting in reverse order: ");
for(let i=10; i>=0; i--){
    console.log(i);
}

console.log("Odd nums upto 10: ");
for(let i=1; i<=10; i+=2){
    console.log(i);
}

console.log("Even nums upto 10: ");
for(let i=2; i<=10; i+=2){
    console.log(i);
}

console.log("Multiplication Table of n:");
let n = prompt("Enter Number:");
n = parseInt(n);
for(let i=1; i<=10; i++){
    console.log(`${n} x ${i} = ${n*i}`);
}

console.log("Nested For Loop ");
for(let i=1; i<=5; i++){
    console.log(i);
    for(let j=1; j<=5; j++){
        console.log(j);
    }
}

// While loop
console.log("While Loop demo:");
let i = 1;
while(i<=5){
    console.log(i);
    i++;
}

// Fav Movie
let favMovie = "Wicked";
let ans = prompt("guess the favourite movie? (enter 'quit' to exit)");
while((ans!=favMovie)&&(ans!="quit")){
    console.log("incorrect guess! (hint: pink goes well with green 💚🩷)");
    ans = prompt("guess the favourite movie?");
}

if(ans=="Wicked"){
    alert("You Guessed It RIGHT!!!");
    console.log("CONGRATS!");
} else {
    console.log("Wicked, was the correct answer!!!");
}

// Break & Continue
console.log("Break and Continue demo:");
i = 1;
while(i<=5){
    if(i==3){
        i++;
        continue;
    }
    if(i==4) break;
    console.log(i);
    i++;
}

// for of 
console.log("For of Demo:");
for(ch of "Wicked"){
    console.log(ch);
}

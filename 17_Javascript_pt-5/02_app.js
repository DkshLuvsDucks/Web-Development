const max = prompt("enter max num");
console.log(`max val set to ${max}...`);

const random = Math.floor(Math.random()*max) + 1;

let guess = prompt("guess correct number");
while(true){
    if(guess == "quit" || guess == "q"){
        console.log("quiting game...");
        console.log(`correct ans = ${random}`);
        break;
    }
    if(parseInt(guess) == random){
        console.log("you got the answer...");
        console.log("Congrats");
        break;
    } else {
        if(parseInt(guess) > random){
            guess = prompt("(hint: random number is smaller) try again...\n('q' or 'quit' to exit)");
        } else {
            guess = prompt("(hint: random number is larger) try again...\n('q' or 'quit' to exit)");
        }
    }
}
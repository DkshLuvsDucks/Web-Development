let gameSeq = [];
let userSeq = [];
let btns = ["red", "green", "yellow", "blue"];

let started = false;
let lvl = 0;
let highestScore = 0;

let h3 = document.querySelector("h3");
let highScoreDisplay = document.querySelector("#high-score");
highScoreDisplay.innerText = `High Score: ${highestScore}`;

window.addEventListener("keypress",()=>{
    if(started==false){
        console.log("game started");
        started = true;

        levelUp();
    }
})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash");
    }, 200);
}

function userFlash(btn){
    btn.classList.add("user-flash");
    setTimeout(()=>{
        btn.classList.remove("user-flash");
    }, 200);
}

function checkAns(idx){
    
    if(gameSeq[idx] == userSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    } else {
        h3.innerText = `Game Over! Final Score : ${lvl-1}\nPress any key to start the game`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(()=>{
            document.querySelector("body").style.backgroundColor="white";
        },150);
        if (lvl - 1 > highestScore) {
            highestScore = lvl - 1;
            highScoreDisplay.innerText = `High Score: ${highestScore}`;
        }
        reset();
    }
}

function levelUp(){
    lvl++;
    h3.innerText = `Level ${lvl}`;
    userSeq = [];

    // choose random btn
    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameFlash(randBtn);
    console.log(randIdx);
    console.log(randBtn);

    gameSeq.push(randColor);

}

function btnPress(){
    if(started){
        let btn = this;
        userFlash(btn);

        userSeq.push(btn.getAttribute("id"));

        checkAns(userSeq.length-1);
    }
}

function reset(){
    gameSeq = [];
    userSeq = [];
    started = false;
    lvl = 0;
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}
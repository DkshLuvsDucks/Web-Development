let p1 = document.createElement("p");
p1.innerText = "Hey, I am red!";
document.querySelector("body").append(p1);
p1.classList.add("red");

let h3_1 = document.createElement("h3");
h3_1.innerText = "I am blue h3!";
document.querySelector("body").append(h3_1);
h3_1.classList.add("blue");

let div = document.createElement("div");
let h1 = document.createElement("h1");
let p2 = document.createElement("p");
document.querySelector("body").append(div);
div.append(h1);
div.append(p2);
p2.innerText = "ME TOO!";
h1.innerText = "I am inside a div!";
div.classList.add("div-colored");


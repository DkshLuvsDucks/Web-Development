let body = document.querySelector("body");

// Q1
let input = document.createElement("input");
let btn = document.createElement("button");
btn.innerText = "Click Me";
body.append(input);
body.append(btn);

// Q2
input.setAttribute("placeholder", "Username");
btn.setAttribute("id", "btn");

// Q3
let btn_test = document.querySelector("#btn");
btn_test.style.backgroundColor = "teal";
btn_test.style.color = "white";

// Q4
let h1 = document.createElement("h1");
body.prepend(h1);
h1.innerText = "DOM Practice";
h1.style.color = "purple";
h1.style.textDecoration = "wavy underline black 2px";

// Q5
let para = document.createElement("p");
para.innerHTML = "Hello World, My name is <b>Daksh</b>!";
h1.insertAdjacentElement("afterend",para);
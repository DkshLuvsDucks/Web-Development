let btn2 = document.querySelector(".btn-2");

// btn2.onclick = function () {
//     console.log("button 2 was pressed!");
// };

// other way of doing the same
function sayHello(){
    alert("Hello");
}
btn2.onclick = sayHello; // onclick can allocate one function only, use event listener to add multiple functions

btn2.onmouseenter = function () {
    console.log("you are on the button 2...");
    btn2.style.backgroundColor = "#8ace00";
};

btn2.onmouseleave = function () {
    console.log("you not on button 2...");
    btn2.style.backgroundColor = "black";
    btn2.style.color = "white";
};


// Event Listener
function fun1(){
    alert("HAIII");
}
function fun2(){
    alert("ALOOO");
}
let btn3 = document.querySelector(".btn-3");
btn3.addEventListener("click", fun1);
btn3.addEventListener("click", fun2);
document.querySelector("button").addEventListener("dblclick", () => {
    console.log("you double clicked :3");
})

let p = document.querySelector("p");
p.addEventListener("click", function(){
    console.log("para was clicked :3");
})

let box = document.querySelector(".box");
box.addEventListener("mouseenter", function(){
    console.log("Mouse inside the box!");
})

// this in event listener
btn3.addEventListener("mouseenter",function(){
    console.log(this);
    this.style.backgroundColor = "black";
    this.style.color = "white";
})

function reset(){
    this.style.backgroundColor = "white";
    this.style.color = "black";
}

btn3.addEventListener("mouseleave",reset)

let input = document.querySelector("input");
input.addEventListener("keydown", function(){
    console.log(event);
    console.log(`${event.key} was pressed`);
})

// Form Event
let form = document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault();
    alert("Form Submitted!");
    let user = document.querySelector("#user");
    let pass = document.querySelector("#pass");
    console.log(`username : ${user.value}\npassword: ${pass.value}`);

    // instead of giving ids to each input seperately we can directly access
    // all form elements. Example :
    console.log(form.elements[0]);
    console.log(this.elements[1]); // this can be used as well
    console.log(form.elements[2]);
})

// change
let user = document.querySelector("#user");
user.addEventListener("change", function(){ // tracks initial and final change
    console.log("change event");
    console.log("final input = ", this.value);
})

// input
// only characters key trigger this event, shift and other keys wont trigger this
user.addEventListener("input", function(){ // tracks all changes
    console.log("input event");
    console.log("final value = ", this.value);
})


// TEXT EDITOR
let text_editor = document.querySelector(".text_editor");
let text_inp = document.querySelector(".text_inp");
text_inp.addEventListener("input", function(){
    text_editor.innerText = this.value;
})

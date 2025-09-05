document.getElementById("mainImg").src = "assets/creation_1.png";

let smallImg = document.getElementsByClassName("oldImg");
for(let i=0; i<smallImg.length; i++){
    console.log(smallImg[i]);
    smallImg[i].src="assets/spiderman_img.png";
}

document.getElementsByTagName("p")[1].innerText = "abc";

// Query Selector
// used to select single element
// returns the first object that matches the input
document.querySelector("h1").innerText = "SPOODER MAN";
document.querySelector(".oldImg").src = "assets/creation_2.jpeg"; // only changes one of the img

// use querySelectorAll for getting an array of all the elements
document.querySelectorAll("p")[0].innerText = "SPOODER MAN";

// innerText: shows visible text contained in a node
// textContent: shows full text content (including hidden one)
// innerHTML: full markup

let para = document.querySelectorAll("p")[0].innerHTML = "<b>SPOODER MAN</b>"; // we can use back ticks for this to prevent writing the same thing again
// example
let heading = document.querySelector("h1");
heading.innerHTML = `<u>${heading.innerText}</u>`;

// Get/Set Attribute
let img = document.querySelector("img");
console.log(img.getAttribute("id"));
img.setAttribute("id", "spidey");
img.setAttribute("src", "assets/creation_3.jpeg");

// style
heading.style.color = "darkred";
heading.style.backgroundColor = "black";
let links = document.querySelectorAll(".box a");
for(link of links){
    link.style.color="red";
}

// class List
let h2 = document.querySelector("h2");
h2.classList.add("brat");
console.log(h2.classList);
h2.classList.add("wavy");
console.log(h2.classList);
h2.classList.toggle("brat");
console.log(h2.classList.contains("wavy"));

// Navigation
let h4 = document.querySelector("h4");
console.log(h4.parentElement);
console.log(h4.children);
console.log(h4.childElementCount);

let box = document.querySelector(".box");
console.log(box.parentElement);
console.log(box.children);
console.log(box.childElementCount);

let ul = document.querySelector("ul");
console.log(ul.parentElement);
console.log(ul.children);
console.log(ul.childElementCount);
console.log(ul.children[0]);
console.log(ul.children[1]);
console.log(ul.children[2]);
console.log(ul.children[2].previousElementSibling);
console.log(ul.children[1].nextElementSibling);

// adding element
let newP = document.createElement("p");
newP.innerText = "This is a new para";
box.appendChild(newP);
newP.append(". This is new text...");

let btn = document.createElement("button");
btn.innerText = "Click Me!";
box.prepend(btn);

let p = document.querySelector("p");
let btn_2 = document.createElement("button");
btn_2.innerText = "NEW BUTTON!";
p.insertAdjacentElement("beforebegin", btn_2); // beforebegin, afterbegin, beforeend, afterend

// remove elements
p.remove();
box.removeChild(btn);
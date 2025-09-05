// Q1
// load
window.addEventListener('load', () => {
    console.log("Page loaded successfully.");
});

// mouseout
const box = document.querySelector('#hoverBox');
box.addEventListener('mouseout', () => {
    alert("Mouse out of the box!");
});

// keypress
document.addEventListener('keypress', (e) => {
    console.log(`Key pressed: ${e.key}`);
});

// scroll
window.addEventListener('scroll', () => {
    console.log("Page is being scrolled.");
});


// Q2
let btn_q2 = document.querySelector("#q2");
btn_q2.addEventListener("click", function(){
    this.classList.toggle("clicked");
})

// Q3
const inp = document.querySelector("#nameInput");
const heading = document.querySelector("#nameHeading");
inp.addEventListener("input", () => {
    // const clean = inp.value.replace(/[^a-zA-Z ]/g, '');
    let clean = '';
    for (let char of inp.value) {
        if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z') || char === ' ') {
            clean += char;
        }
    }
    heading.innerText = clean;
})


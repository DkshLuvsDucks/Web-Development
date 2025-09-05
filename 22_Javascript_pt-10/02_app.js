function  generateRandomColor (){
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    let color = `rgb(${r},${g},${b})`;
    return color;
}

let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    let h3 = document.querySelector("h3");
    let randomColor = generateRandomColor();
    h3.innerText = randomColor;
    
    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;
    console.log("color updated");
});
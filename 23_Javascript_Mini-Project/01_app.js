const div = document.querySelector("div");
const ul = document.querySelector("ul");
const lis = document.querySelectorAll("li");

div.addEventListener("click", ()=>{
    console.log("div was clicked");
})

ul.addEventListener("click", (event)=>{
    event.stopPropagation(); //prevents event bubbling
    console.log("ul was clicked");
})

for(li of lis){
    li.addEventListener("click", (event)=>{
        event.stopPropagation(); //prevents event bubbling
        console.log("li was clicked");
    })
}


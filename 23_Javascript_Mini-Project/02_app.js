const inp = document.querySelector("input");
const btn = document.querySelector("button");
const ul = document.querySelector("ul");

btn.addEventListener("click", ()=>{
    const list = document.createElement("li");
    list.textContent = inp.value;

    const delBtn = document.createElement("button");
    delBtn.innerText = "x";
    
    delBtn.classList.add("delete-btn");

    list.append(delBtn);
    ul.appendChild(list);
    inp.value = "";
})

// const deleteBtns = document.querySelectorAll(".delete-btn");
// for(del of deleteBtns){
//     del.addEventListener("click", ()=>{
//         console.log("delete pressed...");
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();

//     });
// }

// this method does not work for new list elements and buttons
// to fix that we can use event bubbling/ event delegation

ul.addEventListener("click", (e)=>{
    if(e.target.nodeName == "BUTTON"){
        const par = e.target.parentElement;
        par.remove();
    }
})
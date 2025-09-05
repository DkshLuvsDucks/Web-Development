// Axios
let url_1 = "https://catfact.ninja/fact";
let url_2 = "https://dog.ceo/api/breeds/image/random"

let ul = document.querySelector("ul");
let img = document.querySelector("img");

let btn1 = document.querySelector(".btn-1");
btn1.addEventListener("click", randomCatFacts);

let btn2 = document.querySelector(".btn-2");
btn2.addEventListener("click", getRandomDog);

async function randomCatFacts() {
    ul.innerHTML = "";
    let randNum = Math.floor(Math.random()*4)+1;
    for(let i=1; i<=randNum; i++){
        let li = document.createElement("li");
        try{
            let res = await axios.get(url_1);
            li.innerText = res.data.fact;
        } catch (err){
            li.innerText = "Error fetching fact...";
            console.log("ERROR - ", err);
        }
        ul.appendChild(li);
    }
}

async function getRandomDog() {
    try{
        let res = await axios.get(url_2);
        let link = res.data.message;
        img.setAttribute("src",link);
    } catch(e){
        console.log("ERROR -", e);
    }
}
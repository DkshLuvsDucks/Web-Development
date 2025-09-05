const url = "http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("button");
let h3 = document.querySelector("h3");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", getCollegeDetails);

h3.innerText="";

async function getCollegeDetails() {
    h3.innerText="List of Colleges";
    ul.innerText="";
    try{
        let country = inp.value;
        let res = await axios.get(url+country);
        console.log(res);
        let data = res.data;
        
        for(let i=0; i<data.length; i++){
            let li = document.createElement("li");
            li.innerText = data[i].name;
            ul.appendChild(li);
        }
    } catch (err){
        console.log(err);
    }
}

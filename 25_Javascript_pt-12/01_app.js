// Async Functions
async function greet() {
    throw "just quit it gang🥀";
    return "hello";
}
// Async functions always return promises by default

greet()
.then(()=>{
    console.log("promise was successful...");
})
.catch((err)=>{
    console.log("promise failed with error: ", err);
})

// u can make arrow functions async as well
let demo = async () => {return 5};
console.log(demo());

// Await : pauses execution of all async functions until promise is settled or resolved

function fun1(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        }, 2000);
    });
}

async function fun2(){
    await fun1(); // await can be used inside an async function only
    await fun1(); // not using await would make it print all 4 at same time
    await fun1();
    await fun1();
}

fun2();

let h1 = document.querySelector("h1");

function changeColor(color, delay){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            h1.style.color = color
            resolve("color changed!");
        }, delay);
    })
}

async function change(){
    await changeColor("violet", 1000);
    await changeColor("indigo", 1000);
    await changeColor("blue", 1000);
    await changeColor("green", 1000);
    await changeColor("yellow", 1000);
    await changeColor("orange", 1000);
    await changeColor("red", 1000);
    
}

change();

// error handling
let h2 = document.querySelector("h2");

function changeColor2(color, delay){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let num = Math.floor(Math.random()*5)+1;
            if(num>3){
                reject("promise rejected!");
            }
            h2.style.color = color
            resolve("color changed!");
        }, delay);
    })
}

async function change2(){
    try{
        await changeColor2("violet", 1000);
        await changeColor2("indigo", 1000);
        await changeColor2("blue", 1000);
        await changeColor2("green", 1000);
        await changeColor2("yellow", 1000);
        await changeColor2("orange", 1000);
        await changeColor2("red", 1000);
    } catch(err){
        console.log("caught error:",err);
    }
}

change2();

// JSON
let jsonRes = '{"fact":"In ancient Egypt, when a family cat died, all family members would shave their eyebrows as a sign of mourning.","length":110}';
console.log(jsonRes);
console.log(JSON.parse(jsonRes));

let validRes = JSON.parse(jsonRes);
console.log(validRes.fact);
console.log(validRes.length);

let student = {
    name: "daksh",
    age: 21
};
console.log(JSON.stringify(student));

// API requests
let url = "https://catfact.ninja/fact";
let p_1 = document.querySelector(".fact1");
let p_2 = document.querySelector(".fact2");

fetch(url)
.then((response)=>{
    return response.json();
}).then((data1)=>{
    p_1.innerText = data1.fact;
    return fetch(url);
}).then((response)=>{
    return response.json();
}).then((data2)=>{
    p_2.innerText = data2.fact;
})
.catch((err)=>{
    p.innerText = err;
})


async function getFacts() {
    try{
        let res = await fetch(url);
        let data = await res.json();
        console.log("Fetched Data:", data.fact);
    } catch(e){
        console.log("ERROR -", e);
    }
}
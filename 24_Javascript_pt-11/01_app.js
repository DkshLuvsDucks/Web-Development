function one(){
    return 1;
}

function two(){
    return one() + one();
}

function three(){
    let ans = two() + one();
    console.log(ans)
}

three();

// JS is single threaded
// but browser uses lang like c++ which helps in multi threading
let a = 1;
let b = 2;
setTimeout(()=>{console.log("Hello World...")}, 2000);
setTimeout(()=>{console.log("Again, Hello World...")}, 2000);
console.log(`sum: ${a+b}`);

// Callback Nesting = CALLBACK HELL
let heading_1 = document.querySelector("#h1");
let heading_2 = document.querySelector("#h2");

function changeColor(color, delay){
    setTimeout(()=>{
        heading_1.style.color = color
    }, delay);
}

changeColor("violet", 1000);
changeColor("indigo", 2000);
changeColor("blue", 3000);
changeColor("green", 4000);
changeColor("yellow", 5000);
changeColor("orange", 6000);
changeColor("red", 7000);

function changeColor2(color, delay, nextColorChange){
    setTimeout(()=>{
        heading_2.style.color = color
        if(nextColorChange) nextColorChange();
    }, delay);
}

changeColor2("violet", 1000, ()=>{
    changeColor2("indigo", 1000, ()=>{
        changeColor2("blue", 1000, ()=>{
            changeColor2("green", 1000, ()=>{
                changeColor2("yellow", 1000, ()=>{
                    changeColor2("orange", 1000, ()=>{
                        changeColor2("red", 1000);
                    })
                })
            })
        })
    })
})

function saveToDB(data, success, failure){
    let internetSpeed = Math.floor(Math.random()*10) + 1;
    if(internetSpeed > 4){
        success();
    } else {
        failure();
    }
}

saveToDB("Daksh",
    () => {
        console.log("success: your data was saved...");
        saveToDB("IIITD",
            () => {
                console.log("success2: your data was saved...");
                saveToDB("2022142",
                    () => {
                        console.log("success3: your data was saved...");
                    }, () => {
                        console.log("failure3: weak data connection... data not saved...");
                    }
                );
            }, () => {
                console.log("failure2: weak data connection... data not saved...");
            }
        );
    }, () => {
        console.log("failure: weak data connection... data not saved...");
    }
);

// we use promises, async and await to prevent situations like these

// PROMISE
function saveToDB2(data){
    return new Promise ((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random()*10) + 1;
        if(internetSpeed > 4){
            resolve("success: your data was saved");
        } else {
            reject("failure: weak data connection...");
        }
    })
}

let req = saveToDB2("DUZZZZ");
req.then(()=>{
    console.log("promise was resolved");
    console.log(req);
})
.catch(()=>{
    console.log("promise was rejected");
    console.log(req);
})

// simpler way
saveToDB2("DUZZZZ")
.then((result)=>{
    console.log("data1 saved");
    console.log("result of promise : ",result);
    return saveToDB2("DUZZZZ");
})
.then((result)=>{
    console.log("data2 saved");
    console.log("result of promise : ",result);
    return saveToDB2("DUZZZZZZZZZZzz");
})
.then((result)=>{
    console.log("data3 saved");
    console.log("result of promise : ",result);
})
.catch((error)=>{
    console.log("error: ", error);
})

// Improving old code

let heading_3 = document.querySelector("#h3");

function changeColor3(color, delay){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            heading_3.style.color = color
            resolve("color changed!");
        }, delay);
    })
}

changeColor3("violet",1000)
.then(()=>{
    return changeColor3("indigo",1000);
})
.then(()=>{
    return changeColor3("blue",1000);
})
.then(()=>{
    return changeColor3("green",1000);
})
.then(()=>{
    return changeColor3("yellow",1000);
})
.then(()=>{
    return changeColor3("orange",1000);
})
.then(()=>{
    return changeColor3("red",1000);
});
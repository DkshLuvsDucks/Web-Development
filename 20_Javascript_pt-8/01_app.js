// Array Methods
// for each
let arr_1 = [1,2,3,4,5];

function print(el){
    console.log(el);
}

arr_1.forEach(print);

// OR

arr_1.forEach(function print(el){
    console.log(el);
});

arr_1.forEach((el) => {
    console.log(el);
});


let arr_2 = [
    {
        name: "Daksh",
        marks: 95
    },
    {
        name: "Devesh",
        marks: 92
    },
    {
        name: "Gauransh",
        marks: 98
    }
]

arr_2.forEach((student)=>{
    console.log(student);
})

arr_2.forEach((student)=>{
    console.log(student.marks);
})

// MAP function
let double = arr_1.map((el)=>{
    return el*2;
});
console.log(double);

let gpa = arr_2.map((student) => {
    return student.marks/10;
});
console.log(gpa);

// Filter
let arr_3 = [1,3,2,5,3,10,39,49,32,420];
let even_num = arr_3.filter((el)=>{
    return el%2==0;
});
console.log(even_num);

// every (kind of works like doing logical AND (if property applies to all then returns true))
console.log([1,2,3,4].every( (el)=> (el%2==0) ));
console.log([2,4].every( (el) => (el%2==0) ));

// some (like logical OR)
console.log([1,2,3,4].some( (el) => (el%2==0) ));
console.log([1,3].some( (el) => (el%2==0) ));

// reduce (accumulator, element) func form
console.log([1,2,3,4].reduce( (res,el) => (res+el) ));
console.log([1,2,3,4].reduce( (res,el) => {
        console.log(res);
        return res+el;
    }
));

// finding max element in array using reduce
let max = arr_3.reduce((max,el)=>{
    if(max<el) return el;
    else return max;
});
console.log(max);

// PQ
// check if all elements in array are multiple of 10
let arr_4 = [0,10,20,30,40];
let arr_5 = [1,10,20,30,40];
console.log(arr_4.every( (el) => (el%10==0) ));
console.log(arr_5.every( (el) => (el%10==0) ));

// find min
function getMin(nums){
    let min = nums.reduce((min,el)=>{
        if(min<el) return min;
        else return el;
    });
    return min;
}
console.log(getMin(arr_1));

// Default Parameter
function sum(a,b=3){
    console.log(a+b);
}
sum(2);

function sum_2(a=2,b){
    console.log(a+b);
}
sum_2(3); // js assigns num in order so this makes a=2, and b is undefined hence ans: NaN

// Spread
console.log(Math.min(1,2,3,4)); 
// u have to enter numbers seperately here so if u want to do an array of nums here
// use spread instead
console.log(Math.max(...arr_3)); 
console.log(...arr_3);
console.log("Duckssss");
console.log(..."Duckssss");
let chars = [..."ducksss"];

let odd = [1,3,5,7];
let even = [2,4,6,8];
let arr_6 = [...odd, ...even];
console.log(...arr_6);

const data = {
    email: "dkshamv@gmail.com",
    pass: "abcd"
};
const dataCopy = {...data, id:123};
console.log(dataCopy);

// this stores values with indexes as keys
let obj1 = {...arr_1};
console.log(obj1);

let obj2 = {..."ducks"};
console.log(obj2);

// REST
function sum_all(...args){
    return args.reduce((add,el) => add+el);
};
console.log(sum_all(1,2));
console.log(sum_all(1,2,3,4));
console.log(sum_all(1,2,3,4,5,6,7,8,9,10));

function min_2(...args){
    let min = args.reduce((min,el)=>{
        if(min<el) return min;
        else return el;
    });
    return min;
}
console.log(min_2(1,2));
console.log(min_2(2,3,4));
console.log(min_2(4,5,6,7,8,9,10));

// u can pass other variables before "rest", eg:
// function min_2(msg,...args)

// Destructure
let names = ["Daksh", "Gauransh", "Devesh", "Abdur"];
let [winner, runnerUp, ...others] = names;
console.log(winner);
console.log(runnerUp);
console.log(others);

// Destructure Obj
const obj3 = {
    username: "dksh.amv",
    password: "ducksss",
    city: "Delhi"
}
let {username : user, password: secret, city: loc = "Mumbai"} = obj3;
console.log(user, secret, loc);

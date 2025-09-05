// Q1
let nums_1 = [1,2,3,4,5];
const square = nums_1.map( (num) => num*num );
console.log(square);
let sum = square.reduce( (acc, curr) => acc + curr, 0);
console.log(sum);
let avg = sum/nums_1.length;
console.log(avg);

// Q2
let nums_2 = [2,4,6,8,-2,-4];
console.log(nums_2.map( (el) => (el+5)));

// Q3
let strings = ["adam","bob","catlyn","donald","eve"];
console.log(strings.map( (string) => string.toUpperCase() ));

// Q4
const doubleAndReturnArgs = (arr,...args) => [
    ...arr,...args.map((v)=>v*2)
];
console.log(doubleAndReturnArgs([1,2,3],4,4)); //[1,2,3,8,8]
console.log(doubleAndReturnArgs([2],10,4)); //[2,20,8]

// Q5
const mergeObjects = (obj1,obj2) => (
    {...obj1,...obj2}
);
console.log(mergeObjects({a:1,b:2},{c:3,d:4})); //{a:1,b:2,c:3,d:4}
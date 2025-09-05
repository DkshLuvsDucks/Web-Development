// Q1
const calcAvg = (nums) => {
    let sum = 0;
    for(let i=0; i<nums.length; i++){
        sum+=nums[i];
    }
    let avg = sum/nums.length;
    console.log(`Avg : ${avg}`);
    return avg;
}
let arr = [1,2,3,4,5];
calcAvg(arr);

// Q2
const isEven = n => n%2==0;
console.log(`2 is Even : ${isEven(2)}`);
console.log(`3 is Even : ${isEven(3)}`);

// Q3
const object = {
    message: 'Hello,World!',
    logMessage() {
        console.log(this.message);
    }
};
setTimeout(object.logMessage, 1000);
// Passing the method directly to setTimeout loses its original context.
// Inside setTimeout, `this` refers to the global object (`window`),
// not the `object`, so `this.message` is undefined.

// Ans3: After a delay of 1 second, undefined is logged to the console. 
// While the setTimeout() function uses the object.logMessage as a callback, 
// it still invokes object.logMessage as a regular function rather than a method. 
// During a regular function invocation, this equals the global object, which is 
// window in the case of the browser environment. That's why console.log(this.message) 
// inside the logMessage method logs window.message, which is undefined.


// Q4
let length = 4;

function callback() {
    console.log(this.length);
}

const object_2 = {
    length: 5,
    method(callback) {
        callback();
    },
};

object_2.method(callback, 1, 2);

// The output is 0 because callback() is called as a regular function, so this refers 
// to the global object (window). The global window object has a built-in length property 
// that counts the number of frames, which is usually 0. The let length = 4; does not create 
// a window.length property, so it doesn't affect the output.
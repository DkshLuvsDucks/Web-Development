// Q1
function elementsGreaterThan(arr, num){
    let ans = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i]>num){
            ans.push(arr[i]);
        }
    }
    return ans;
}
let arr_1 = [1,2,3,4,4,6,0,2,7,10];
console.log(elementsGreaterThan(arr_1, 2));


// Q2
function getUnique(str){
    let ans = "";
    for(let i=0; i<str.length; i++){
        let currChar = str[i]
        if(ans.indexOf(currChar)==-1){
            ans+=currChar;
        }
    }
    return ans;
}
let str = "a footnote will do..."
console.log(getUnique(str));


// Q3
function largestCountry(c_names){
    let maxIdx = 0;
    for(let i=0; i<c_names.length; i++){
        if(c_names[i]>c_names[maxIdx]){
            maxIdx=i;
        }
    }
    return c_names[maxIdx];
}
let countries = ["United States of America", "India", "Japan", "China"];
console.log(largestCountry(countries));


// Q4
function countVowels(str){
    let count = 0;
    for(let i=0; i<str.length; i++){
        if(    str[i] == "a"
            || str[i] == "e"
            || str[i] == "i"
            || str[i] == "o"
            || str[i] == "u"
        ){
            count++;
        }
    }
    return count;   
}
let str_4 = "i have the one and only 24K gold labubu";
console.log(countVowels(str_4));


// Q5
function generateRandomInRange(start,end){
    let diff = end - start;
    return Math.floor(Math.random()*diff + start);
}
console.log(generateRandomInRange(67,77));
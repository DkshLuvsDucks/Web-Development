// Assignment
// Q1
let arr_1 = [1,2,3,4,5,6,2,3];
let num_1 = 2;
for(let i=0; i<arr_1.length;i++){
    if(arr_1[i]==num_1){
        arr_1.splice(i,1);
    }
}
console.log(arr_1);

// Q2
let num_2 = 287152;
let copy = num_2;
let count_2 = 0;
while(copy>0){
    count_2++;
    copy = Math.floor(copy / 10);
}
console.log(count_2);

// Q3
let num_3 = 287152;
let copy_3 = num_3;
let sum = 0;
while(copy_3>0){
    sum+=copy_3%10;
    copy_3 = Math.floor(copy_3 / 10);
}
console.log(sum);

// Q4
let num_4 = parseInt(prompt("please enter a number"));
let fact = 1;
let copy_4 = num_4;
while(copy_4>0){
    fact*=copy_4%10;
    copy_4--;
}
console.log(`Factorial of ${num_4} = ${fact}`);

// Q5
let max = 0;
for(let i=0; i<arr_1.length;i++){
    if(arr_1[i]>max){
        max=arr_1[i];
    }
}
console.log(`Max element in array is ${max}`);
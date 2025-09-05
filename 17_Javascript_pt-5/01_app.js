// Javascript Object Literals
let student = {
    name: "Daksh",
    age: 21,
    college: "IIITD",
    cgpa: 7.17 
};

const item = {
    id: 101,
    price: 20,
    discount: 10,
    colors : ["red", "blue"]
};

const post = {
    username : "@duxpookie",
    caption : "this is my first post",
    likes : 34,
    comments : 35,
    reposts : 10,
    shares : 5,
    tags : ["@dkshluvsducks", "@dksh.amv"]
};

console.log(post["likes"]);
console.log(post.likes);


// Object literals convert keys to strings and hence there was no issue w using keywords
const obj = {
    1 : "a", 
    null : "b",
    undefined : "c"
};

// Adding, Deleting and Updating Values
console.log(student.name);
student.name = "Devesh Hooda";
console.log(student.name);

student.gender;
console.log(student.gender);
student.gender = "M";
console.log(student.gender);

console.log(student);
delete student.gender;
console.log(student);

// Nested Objects
const classInfo = {
    daksh : {
        grade: "A+",
        city: "New Delhi"
    },
    devesh : {
        grade: "A+",
        city: "South Delhi"
    },
};
console.log(classInfo);
console.log(classInfo.daksh.grade);

// Array of Objects
const studentInfo = [
    {
        name: "Daksh",
        city: "Delhi"
    },
    
    {
        name: "Devesh",
        city: "Delhi"
    }
];
console.log(studentInfo[1].name);

// Math Obj
console.log(Math.floor(Math.random()*10)+1);
console.log(Math.PI);
console.log(Math.E);
console.log(Math.sqrt(25));

// PQ
// random num b/w 1-100
console.log(Math.floor(Math.random()*100)+1);
// random num b/w 1-5
console.log(Math.floor(Math.random()*5)+1);
// random num b/w 21-25
console.log(Math.floor(Math.random()*5)+21);
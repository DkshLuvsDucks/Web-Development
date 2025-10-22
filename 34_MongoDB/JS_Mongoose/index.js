const mongoose = require('mongoose');

// mongoose.connect("mongodb://127.0.0.1:27017/test");

main()
.then(
    (res) => {
        console.log("connection successful");
    })
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

// This will make a collection with a plural name of the variable in the given database
const User = mongoose.model("User", userSchema);
const Employee = mongoose.model("Employee", userSchema);

// New Data
const user1 = new User({
  name: "Adam",
  email: "adam@gmail.com",
  age: 29
});

// Save data in collection
// user1.save();


const user2 = new User({
  name: "Bob",
  email: "Bob@gmail.com",
  age: 29
});

// Save data in collection
// user2
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
// ;

// Insert Many
const userData = [
  {name: "Charlie", email: "Charlie@gmail.com", age: 29}, 
  {name: "Nick", email: "Nick@gmail.com", age: 29}, 
  {name: "Darcy", email: "Darcy@gmail.com", age: 29} 
];

// User.insertMany(userData)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
// ;

// Mongoose Find doesnt return a promise it returns an object
User.find({}).then((data) =>{
  console.log(data);
}).catch((err) => {
  console.log(err);
});

User.findOne({}).then((data) =>{
  console.log(data);
}).catch((err) => {
  console.log(err);
});

User.findById("68f36f692e8ea0c6d7261d35").then((data) =>{
  console.log(data);
}).catch((err) => {
  console.log(err);
});

User.updateOne({name: "Adam"}, {age: 49})
  .then((res) =>{
    console.log(res);
  }).catch((err) => {
    console.log(err);
  })
;

User.updateMany({age: {$gt: 20}}, {age: 55})
  .then((res) =>{
    console.log(res);
  }).catch((err) => {
    console.log(err);
  })
;

User.findOneAndUpdate({name: "Nick"}, {age: 20})
  .then((res) =>{
    console.log(res);
  }).catch((err) => {
    console.log(err);
  })
;

User.findOneAndUpdate({name: "Charlie"}, {age: 21}, {new: true})
  .then((res) =>{
    console.log(res);
  }).catch((err) => {
    console.log(err);
  })
;

User.findByIdAndUpdate("68f36f692e8ea0c6d7261d36", {age: 21}, {new: true})
  .then((res) =>{
    console.log(res);
  }).catch((err) => {
    console.log(err);
  })
;

// User.deleteOne({name: "Adam"})
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
// ;

// User.deleteMany({})
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
// ;

User.deleteOne({name: "Adam"})
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })
;

User.deleteMany({})
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })
;

User.findByIdAndDelete("68f36f692e8ea0c6d7261d36")
  .then((res) =>{
    console.log(res);
  }).catch((err) => {
    console.log(err);
  })
;

User.findOneAndDelete({name: "Adam"})
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })
;



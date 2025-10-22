const mongoose = require('mongoose');

main()
.then(
    (res) => {
        console.log("connection successful");
    })
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 100
    },
    author: {
        type: String
    },
    price: {
        type: Number,
        min: [0, "please enter a valid price."]
    },
    discount: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        enum: ["fiction", "non-fiction"]
    },
    genre: [String]
});

const Book = mongoose.model("Book", bookSchema);

// let book1 = new Book({
//     title: "Mathematics XII",
//     author: "RD Sharma",
//     price: 1200
// });

// book1
//     .save()
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err);
//     });


// let book2 = new Book({
//     title: "Mathematics XI",
//     author: "RD Sharma",
// });

// book2
//     .save()
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err);
//     });

// let book3 = new Book({
//     author: "RD Sharma",
//     price: 1200
// });

// book3
//     .save()
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err);
//     });

Book.findByIdAndUpdate("68f75a35d07e24fd2551b2d7", {price: -500}, {runValidators: true})
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err.errors.price.properties.message);
    });
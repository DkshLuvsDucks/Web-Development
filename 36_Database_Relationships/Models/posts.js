const mongoose = require("mongoose");
const {Schema} = mongoose;

main()
.then(
    (res) => {
        console.log("connection successful");
    })
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const userSchema = new Schema({
    username: String,
    email: String 
});

const postSchema = new Schema({
    content: String,
    likes: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    } 
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

// const addData = async() => {
//     let user1 = new User({
//         username: "dksh.amv",
//         email: "dkshamv@gmail.com"
//     });

//     let post1 = new Post({
//         content: "Hello World",
//         likes: 67
//     });

//     post1.user = user1;
    
//     await user1.save();
//     await post1.save();

// }

// const addData = async() => {
//     let user1 = await User.findOne({username: "dksh.amv"});

//     let post2 = new Post({
//         content: "Hello World, again!",
//         likes: 34
//     });

//     post2.user = user1;
    
//     await user1.save();
//     await post2.save();

// }
// addData();

const fetchData = async() => {
    let result = await Post.findOne({}).populate("user", "username");
    console.log(result);
}

fetchData();
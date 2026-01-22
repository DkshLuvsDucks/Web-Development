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
    addressses: [
        {
            _id: false,
            location: String,
            city: String
        }
    ] 
});

const User = mongoose.model("User", userSChema);

const addUsers = async() => {
    user1 = new User({
        username: "dkshamv",
        addressses: [
            {
                location: "16/259 Karol Bagh",
                city: "New Delhi"
            }
        ]
    });
    user1.addressses.push({location: "P32 floor 3, Rajendra Palace", city: "New Delhi"});
    let result = await user1.save();
    console.log(result);
}

addUsers();
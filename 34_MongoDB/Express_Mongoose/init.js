const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
.then(
    (res) => {
        console.log("connection successful");
    })
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

// let chat1 = new Chat({
//     from: "daksh",
//     to: "aditya",
//     msg: "hop on FORT!",
//     created_at: new Date()
// })

// chat1
// .save()
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err);
//     });

let chats = [
  { from: "emma", to: "liam", msg: "you up for a quick game?", created_at: new Date() },
  { from: "noah", to: "ava", msg: "meet me in the lobby in 5", created_at: new Date() },
  { from: "oliver", to: "sophia", msg: "that was a crazy win!", created_at: new Date() },
  { from: "mia", to: "lucas", msg: "snacks ready, let's gooo!", created_at: new Date() },
  { from: "jack", to: "amelia", msg: "team up?", created_at: new Date() },
  { from: "harper", to: "elijah", msg: "we need a healer!", created_at: new Date() },
  { from: "james", to: "isabella", msg: "cover me, reloading", created_at: new Date() },
  { from: "charlotte", to: "logan", msg: "voice chat on?", created_at: new Date() },
  { from: "benjamin", to: "luna", msg: "that was clutch!", created_at: new Date() },
  { from: "ella", to: "ethan", msg: "I'm lagginggg", created_at: new Date() },
  { from: "henry", to: "scarlett", msg: "where we landing?", created_at: new Date() },
  { from: "grace", to: "mason", msg: "don’t forget your loadout", created_at: new Date() },
  { from: "logan", to: "chloe", msg: "trio or squad?", created_at: new Date() },
  { from: "leo", to: "zoey", msg: "push or wait?", created_at: new Date() },
  { from: "lily", to: "owen", msg: "hop on discord", created_at: new Date() },
  { from: "aiden", to: "nora", msg: "ggs last round", created_at: new Date() },
  { from: "hannah", to: "caleb", msg: "let’s grind some ranks", created_at: new Date() },
  { from: "sebastian", to: "aria", msg: "I got the new skin!", created_at: new Date() },
  { from: "ella", to: "ryan", msg: "what time tonight?", created_at: new Date() },
  { from: "lucy", to: "daniel", msg: "streaming it?", created_at: new Date() }
];

Chat.insertMany(chats);
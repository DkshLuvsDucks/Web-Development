const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError.js");

const port = 8080;

app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

main()
.then(
    (res) => {
        console.log("connection successful");
    })
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

function asyncWrap(fn){
    return function (req, res, next) {
        fn(req, res, next).catch((err) => next(err));
    }
}

// Index Route
app.get("/chats",asyncWrap(async (req, res)=>{
    let chats = await Chat.find();
    console.log(chats);
    res.render("index", {chats});
}));

// New Route
app.get("/chats/new", (req,res)=>{
    // throw new ExpressError(404, "page not found");
    res.render("new"); 
});

// Create Route
// app.post("/chats",(req, res)=>{
//     try{
//         let{from, msg, to} = req.body;
//         let newChat = new Chat({
//             from: from,
//             msg: msg,
//             to: to,
//             created_at: Date.now()
//         });
//         newChat
//             .save()
//             .then((res)=>{
//                 console.log("chat was saved...");
//             })
//             .catch((err)=>{
//                 console.log(err);
//             });
//         res.redirect("/chats");
//     } catch (err) {
//         next(err);
//     }
// });

app.post("/chats",asyncWrap((req, res)=>{
    let{from, msg, to} = req.body;
    let newChat = new Chat({
        from: from,
        msg: msg,
        to: to,
        created_at: Date.now()
    });
    newChat
        .save()
        .then((res)=>{
            console.log("chat was saved...");
        })
        .catch((err)=>{
            console.log(err);
        });
    res.redirect("/chats");
}));


//show route
// app.get("/chats/:id", async (req, res, next) => {
//     try {
//         let {id} = req.params;
//         let chat = await Chat.findById(id);
//         // if(!chat) {
//         //     next(new ExpressError(404, "chat not found"));
//         // }
//         res.render("edit", {chat});
//     } catch (err) {
//         next(err);
//     }
// });
app.get("/chats/:id", asyncWrap(async (req, res, next) => {
    let {id} = req.params;
    let chat = await Chat.findById(id);
    // if(!chat) {
    //     next(new ExpressError(404, "chat not found"));
    // }
    res.render("edit", {chat});
}));

// Edit Route
app.get("/chats/:id/edit", asyncWrap(async (req, res) => {
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit", {chat});
}));

// Update Route
app.put("/chats/:id",asyncWrap(async (req, res)=>{
    let {id} = req.params;
    let {msg: newMsg} = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(
        id, 
        {msg: newMsg}, 
        {runValidators: true, new: true}
    );
    console.log(updatedChat);
    res.redirect("/chats");
}));

// Destroy Route
app.delete("/chats/:id", asyncWrap(async (req, res) => {
    let {id} = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
}));

app.get("/", (req,res)=>{
    res.send("root is working...");
});

// Error handling middleware
const handleValidationError = (err) => {
    console.log("This was a validation error, please follow rules...");
    console.dir(err.message);
    return err;
};

app.use((err, req, res, next) => {
    console.log(err.name);
    if(err.name==="ValidationError") {
        err = handleValidationError(err);
    }
    next(err);
});

app.use((err, req, res, next) => {
    let{status=500, message="some error occured"} = err;
    res.status(status).send(message);
});

app.listen(port, ()=>{
    console.log(`server is running on port: ${port}`);
});
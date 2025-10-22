const express = require("express");
const app = express();

// console.dir(app);

let port = 3000;

app.listen(port, () => {
    console.log(`app is listening on port: ${port}`);
})

// this sends same response to all reqs, u can send only one response per request
// app.use((req, res) => {
//     console.log("request received...");
//     let code = "<h1>Hello World!</h1><hr><p>This is my first express request...</p>"
//     res.send(code);
// })


// to send diff response based on routes
app.get("/", (req, res) => {
    res.send("you contacted root path...");
});

app.post("/", (req, res) => {
    res.send("you sent a post request...");
});


app.get("/apple", (req, res) => {
    let obj = {
        name: "apple",
        color: "red"
    };
    res.send(obj);
});

app.get("/orange", (req, res) => {
    let obj = {
        name: "orange",
        color: "orange"
    };
    res.send(obj);
});

app.get("/:username/:id", (req, res) => { // username, id are path variable here
    console.log(req.params);
    let{username, id} = req.params;
    res.send(`Welcome @${username}`);
});

app.get("/search", (req, res) => {
    let {q} = req.query;
    if(!q){
        res.send("nothing searched");
    }
    res.send(`search results for query: ${q}`);
});

// all remaining paths (FALLBACK ROUTE)
app.use((req, res) => {
    res.status(404).send("BAD REQUEST! Path does not exist");
});

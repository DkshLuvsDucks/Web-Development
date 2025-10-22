const express = require("express");
const app = express();
const port = 8080;

// parsing POST response, imp   otherwise will show undefined
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(port, ()=>{
    console.log(`listening on port: ${port}`);
})

app.get("/register", (req, res)=>{
    let {user, pass} = req.query;
    res.send(`standard GET response, Welcome ${user}`);
})

app.post("/register", (req, res)=>{
    let {user, pass} = req.body;
    res.send(`standard POST response, Welcome ${user}`);
})
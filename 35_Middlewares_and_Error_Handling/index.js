const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");


// This will get stuck since the middleware didnt call next
// app.use(() => {
//     console.log("Hi, I am middleware!");
// });

// This will only send the middleware response all the time and u wont be able to access other routes
// app.use((req, res) => {
//     console.log("Hi, I am middleware!");
//     res.send("Hi, I am Middleware...");
// });

// app.use((req, res, next) => {
//     console.log("Hi, I am 1st middleware!");
//     next();
// });

// app.use((req, res, next) => {
//     console.log("Hi, I am 2nd middleware!");
//     next();
// });


// Utility Middleware
// Logger
app.use((req, res, next) => {
    req.time = new Date(Date.now()).toString();
    console.log(req.method, req.path, req.hostname, req.time);
    next();
});

// Middleware for specific route
// app.use("/random", (req, res, next) => {
//     console.log("I only work for /random...");
//     next();
// });

// app.use("/api", (req, res, next) => {
//     let {token} = req.query;
//     if(token==="giveaccess"){ // http://localhost:8080/api?token=giveaccess
//     } else {
//         res.send("ACCESS DENIED!");
//     }
// });

const checkToken = (req, res, next) => {
    console.log("I only work for /random...");
    next();
};

app.use("/api", checkToken, (req, res, next) => {
    let {token} = req.query;
    if(token==="giveaccess"){ // http://localhost:8080/api?token=giveaccess
        res.send("data");
    } else {
        throw new ExpressError(401, "ACCESS DENIED!");
    }
});

app.get("/api", (req, res) => {
    res.send("data");
});

// express default error handler (built-in)
app.get("/err", (req,res)=>{
    abcd = abcd;
});

app.get("/", (req, res)=>{
    res.send("Hi, I am root.");
});

app.get("/random", (req, res)=>{
    res.send("Hi, I am random");
});

// Activity
app.get("/admin", (req, res) => {
    throw new ExpressError(403, "Access to admin is forbidden");
});

app.use((err, req, res, next) => {
    console.log("--------- ERROR ---------");
    let {status = 500, message = "some error occured!"} = err;
    // next();
    res.status(status).send(message);
})

app.use((req,res) => {
    res.status(404).send("PAGE NOT FOUND!!!");
});

app.listen(8080, () => {
    console.log("Server is listening on port 8080");
})
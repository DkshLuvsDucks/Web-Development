const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

// serving static file
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
    console.log(`listening on port : ${port}`);
})

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render("home", {
    name: "John Doe",
    about: "I’m a web developer passionate about building clean and functional websites.",
    projects: [
      { title: "Portfolio Website", desc: "Personal website built with EJS.", link: "#" },
      { title: "Todo App", desc: "Full-stack app using Node.js.", link: "#" },
    ],
    email: "john@example.com",
  });
})

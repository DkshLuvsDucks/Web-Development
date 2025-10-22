import { faker } from "@faker-js/faker";
import mysql from "mysql2/promise";
import express from "express";
import path from "path";
import methodOverride from "method-override";
import { v4 as uuidv4 } from "uuid";

// Fix __dirname
const __dirname = path.resolve();

const app = express();
const PORT = 8080;

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, "public")));

// Create the connection to database
const connection = await mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "123",
});

// Random user generator
let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});

// Home Route
app.get("/", async (req, res) => {
  let q = `SELECT count(*) FROM user`;
  try {
    const [result] = await connection.query(q);
    let count = result[0]["count(*)"];
    res.render("home", { count });
  } catch (err) {
    console.error("Query error:", err);
    res.send("Some error in DB");
  }
});

// Show Users
app.get("/user", async (req, res) => {
  let q = `SELECT * FROM user`;
  try {
    const [users] = await connection.query(q);
    // console.log("Insert result:", users);
    res.render("showusers", { users });
  } catch (err) {
    console.error("Query error:", err);
    res.send("Some error in DB");
  }
});

// Edit Users
app.get("/user/:id/edit", async (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id = "${id}"`;
  try {
    const [result] = await connection.query(q);
    let user = result[0];
    res.render("edit", { user });
  } catch (err) {
    console.error("Query error:", err);
    res.send("Some error in DB");
  }
});

// Update User
app.patch("/user/:id", async (req, res) => {
  let { id } = req.params;
  let { password: formPass, username: newUsername } = req.body;
  let q = `SELECT * FROM user WHERE id = "${id}"`;
  try {
    const [result] = await connection.query(q);
    let user = result[0];
    if (formPass != user.password) {
      res.send("Wrong Pass!");
    } else {
      let q2 = `UPDATE user SET username = "${newUsername}" WHERE id = "${id}"`;
      const [result] = await connection.query(q2);
      res.redirect("/user");
    }
  } catch (err) {
    console.error("Query error:", err);
    res.send("Some error in DB");
  }
});

// ADD user form
app.get("/user/new", (req, res) => {
  res.render("newUser");
});

// ADD USER
app.post("/user", async (req, res) => {
  const { username, email, password } = req.body;
  const id = uuidv4();

  const q = `INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)`;

  try {
    await connection.query(q, [id, username, email, password]);
    res.redirect("/");
  } catch (err) {
    console.error("Insert error:", err);
    res.send("Error adding user");
  }
});

// Show Delete Confirmation Form
app.get("/user/:id/delete", async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await connection.query(`SELECT * FROM user WHERE id = ?`, [
      id,
    ]);
    if (result.length === 0) {
      return res.send("User not found");
    }
    const user = result[0];
    res.render("deleteUser", { user });
  } catch (err) {
    console.error("Query error:", err);
    res.send("Some error in DB");
  }
});

// Handle Delete User POST
app.delete("/user/:id", async (req, res) => {
  const { id } = req.params;
  const { password } = req.body;

  try {
    const [result] = await connection.query(`SELECT * FROM user WHERE id = ?`, [
      id,
    ]);
    const user = result[0];

    if (!user || user.password !== password) {
      return res.render("deleteUser", { user, error: "Incorrect password" });
    }

    await connection.query(`DELETE FROM user WHERE id = ?`, [id]);
    res.redirect("/");
  } catch (err) {
    console.error("Delete error:", err);
    res.send("Error deleting user");
  }
});

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  let name = req.query.name || "";
  res.send("Hello Section Palembang " + name);
});

app.get("/json", (req, res) => {
  res.json({ name: "ayo" });
});

app.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  const queryName = req.query.name;
  res.send(`User ID: ${userId}, Query Name: ${queryName}`);
});

const books = [
  { id: 1, title: "Book A" },
  { id: 2, title: "Book B" },
];

app.get("/api/books", (req, res) => {
  res.json(books);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

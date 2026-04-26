const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("Naira Wallet Backend is Running");
});

// REGISTER (FAKE FOR NOW)
app.post("/register", (req, res) => {
  res.json({ message: "User registered (demo)" });
});

// LOGIN (FAKE FOR NOW)
app.post("/login", (req, res) => {
  res.json({ message: "Login successful (demo)" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});

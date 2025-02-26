const express = require("express");
const path = require("path");

const app = express();

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname)));

// Serve login.html at http://localhost:3000/
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "login.html"));
});

// Start Server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));

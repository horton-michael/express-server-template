// DEPENDENCIES
const express = require("express");

// DATA

// APP / PORT
const app = express();

const PORT = process.env.port || 4007;

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));
// ROUTES
app.get("/", (req, res) => {
  res.send("Hello World");
});

// START THE SERVER
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

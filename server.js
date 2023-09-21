// DEPENDENCIES
const express = require("express");
const routes = require("./routes/index.js");
// DATA

// APP / PORT
const app = express();

const PORT = process.env.port || 4007;

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));
// ROUTES
app.use(routes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("*", (req, res) => {
  res.status(404).send("404 - Not Found");
});

// START THE SERVER
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

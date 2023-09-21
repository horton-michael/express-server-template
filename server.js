// DEPENDENCIES
const express = require("express");

// DATA

// APP / PORT
const app = express();

const PORT = process.env.port || 4007;

// MIDDLEWARES

// ROUTES

// START THE SERVER
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

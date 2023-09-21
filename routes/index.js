const router = require("express").Router();
const htmlRoutes = require("./htmlRoutes.js");
const apiRoutes = require("./API/index.js");
// HTML ROUTES

// API ROUTES
router.use(htmlRoutes);
router.use("/api", apiRoutes);

module.exports = router;

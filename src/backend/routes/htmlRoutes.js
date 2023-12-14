// Modules
const router = require("express").Router();
const path = require("path");

// HTML Routes
router.route("/notes").get((req, res) => {
  res.sendFile(path.join(__dirname, "../../public/html/notes.html"));
});

router.route("*").get((req, res) => {
  res.sendFile(path.join(__dirname, "../../public/html/index.html"));
});

module.exports = router;

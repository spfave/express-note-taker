// Modules
const router = require("express").Router();
// const path = require("path");

//
const notes = require("../db/db.json");

// API Routes
router.route("/notes").get((req, res) => {
  res.json(notes);
});

router.route("/notes").post((req, res) => {});

router.route("/notes/:id").delete((req, res) => {});

module.exports = router;

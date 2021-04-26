// Modules
const router = require("express").Router();
const { v4: uuidv4 } = require("uuid");

// Data
const notes = require("../db/db.json");

// API Routes
router.route("/notes").get((req, res) => {
  res.json(notes);
});

router.route("/notes").post((req, res) => {
  const newNote = req.body;
  newNote.id = uuidv4();
  notes.push(newNote);
  res.end();
});

router.route("/notes/:id").delete((req, res) => {});

module.exports = router;

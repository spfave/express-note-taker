// Import modules
const express = require("express");
const path = require("path");

// Set server port and create express server
const PORT = process.env.PORT || 3000;
const app = express();

// Configure express app for data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());

// Routes
const htmlRouter = require("./backend/routes/htmlRoutes");

app.use("/", htmlRouter);

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public/html/index.html"));
// });

// Initiate server operation
app.listen(PORT, () => console.log(`App listening on PORT: ${PORT}`));

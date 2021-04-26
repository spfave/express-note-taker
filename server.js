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
const apiRouter = require("./backend/routes/apiRoutes");
const htmlRouter = require("./backend/routes/htmlRoutes");

app.use("/api", apiRouter);
app.use("/", htmlRouter);

// Initiate server operation
app.listen(PORT, () => console.log(`App listening on PORT: ${PORT}`));

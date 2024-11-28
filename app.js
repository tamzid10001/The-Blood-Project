const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");

const userHandler = require("./controller/userHandler");

/* express app initialization */
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "frontend/dist")));
app.use(
 cors({
  origin: "*",
  methods: "GET,PUT,POST,DELETE",
 })
);
dotenv.config();

/* database connection */
mongoose
 .connect(process.env.MONGODB_URI)
 .then(() => console.log("Connected to database"))
 .catch((err) => console.log(err));

/* application routes */
app.use("/api/user", userHandler);
app.get("*", (req, res) => {
 res.sendFile(path.join(__dirname, "frontend/dist/index.html"));
});

/* default error handler */
app.use((err, req, res, next) => {
 if (req.headersSent) {
  return next(err);
 }
 res.status(500).json({
  error: err || "Some error occurred!",
 });
});

app.listen(3000, () => {
 console.log("Listening on port 3000");
});

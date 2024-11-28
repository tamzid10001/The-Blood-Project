const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");

const UserController = require("./controller/UserController");
const InventoryController = require("./controller/InventoryController");
const PORT = process.env.PORT || 3000;

const buildFrontend = () => {
    console.log('Building frontend...');
    return new Promise((resolve, reject) => {
      exec('cd frontend && npm install && npm run build', (error, stdout, stderr) => {
        if (error) {
          console.error('Error building frontend:', stderr);
          reject(stderr);
        } else {
          console.log('Frontend built successfully:', stdout);
          resolve(stdout);
        }
      });
    });
  };
  
  // Serve the frontend after building
  buildFrontend()
    .then(() => {
/* express app initialization */
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "frontend/dist")));
app.use(
 cors({
  origin: "*",
  methods: "GET,PUT,POST,DELETE,PATCH",
 })
);
dotenv.config();

/* database connection */
mongoose
 .connect(process.env.MONGODB_URI)
 .then(() => console.log("Connected to database"))
 .catch((err) => console.log(err));

/* application routes */
app.use("/api/user", UserController);
app.use("/api/inventory", InventoryController);
app.get("*", (req, res) => {
 res.sendFile(path.join(__dirname, "frontend/dist/index.html"));
});

/* default error handler */
app.use((err, req, res, next) => {
 if (req.headersSent) {
  return next(err);
 }
 if (process.env.NODE_ENV === "development") {
  res.status(500).json({
   error: err.message || err,
   stack: err.stack || "",
  });
 } else {
  res.status(500).json({
   error: "Internal server error!",
  });
 }
});

app.listen(PORT, () => {
 console.log(`Running on http://localhost:${PORT}`);
});

    })
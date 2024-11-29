const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const checkLogin = require("./middlewares/checkLogin");
const userSchema = require("../model/user");
const sendEmail = require("./utils/email");

/* User model */
const User = mongoose.model("User", userSchema);

/* GET - verify login token */
router.get("/verify", checkLogin, async (req, res, next) => {
 try {
  res.status(200).json({
   message: "Successfully logged in!",
   data: {
    userId: req.userId,
    name: req.name,
    bank_name: req.bank_name,
    email: req.email,
   },
  });
 } catch (err) {
  return next(err);
 }
});

/* GET - get current user */
router.get("/", checkLogin, async (req, res, next) => {
 try {
  const data = await User.findOne({ _id: req.userId }).select("-password");
  res.status(200).json({
   message: "Successfully retrieved user!",
   data,
  });
 } catch (err) {
  return next(err);
 }
});

/* POST - create a new user */
router.post("/signup", async (req, res, next) => {
 if (req.body.name && req.body.password && req.body.email) {
  const newUser = new User({
   name: req.body.name,
   bank_name: req.body.bank_name,
   password: bcrypt.hashSync(req.body.password, 10),
   email: req.body.email,
   createdAt: Date.now(),
   lastLoginAt: Date.now(),
  });
  try {
   const data = await newUser.save();
   res.status(201).json({
    message: "Successfully created a new user!",
    data,
   });
  } catch (err) {
   return next(err);
  }
 } else {
  res.status(400).json({
   error: "Please provide all required fields!",
  });
 }
});

/* POST - login a user */
router.post("/login", async (req, res, next) => {
 try {
  let reqObj = {};
  if (req.body.name) reqObj = { name: req.body.name };
  else if (req.body.email) reqObj = { email: req.body.email };
  else {
   res.status(400).json({
    error: "Please provide name or email!",
   });
   return;
  }
  const user = await User.findOne(reqObj);
  if (user) {
   if (bcrypt.compareSync(req.body.password, user.password)) {
    const token = jwt.sign(
     {
      name: user.name,
      userId: user._id,
     },
     process.env.JWT_SECRET,
     {
      expiresIn: "14d",
     }
    );
    res.status(200).json({
     message: "Successfully logged in!",
     accessToken: token,
    });
   } else {
    res.status(401).json({
     error: "Authentication failed!",
    });
   }
  } else {
   res.status(401).json({
    error: "Authentication failed!",
   });
  }
 } catch (err) {
  return next(err);
 }
});

/* PUT - update a user by id */
router.put("/:id", checkLogin, async (req, res, next) => {
 try {
  let updatedUser = {
   updatedAt: Date.now(),
  };
  if (req.body.title) updatedUser.title = req.body.title;
  if (req.body.description) updatedUser.description = req.body.description;
  if (req.body.status) updatedUser.status = req.body.status;
  await User.updateOne(
   { _id: req.params.id },
   {
    $set: updatedUser,
   }
  );
  res.status(200).json({
   message: "Successfully updated user!",
   data: updatedUser,
  });
 } catch (err) {
  return next(err);
 }
});

/* DELETE - delete a user by id */
router.delete("/:id", checkLogin, async (req, res, next) => {
 try {
  await User.deleteOne({ _id: req.params.id });
  res.status(200).json({
   message: "Successfully deleted user!",
  });
 } catch (err) {
  return next(err);
 }
});

/* POST - forgot password */
router.post("/forgot-password", async (req, res, next) => {
 try {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
   return next("User not found!");
  }
  const resetToken = user.createPasswordResetToken();
  const resetUrl = `${req.protocol}://${req.get(
   "host"
  )}/reset-password/${resetToken}`;
  await user.save({ validateBeforeSave: false });
  try {
   await sendEmail(
    user.email,
    "[The Blood Project] Password Reset Email",
    `We have recieved a pasword reset request. Please use the link below to reset your password: \n\n${resetUrl}\n\nThis link will expire in 10 minutes.`
   );
   res.status(200).json({
    message: "Successfully sent password reset email!",
   });
  } catch (e) {
   user.passwordResetToken = undefined;
   user.passwordResetExpires = undefined;
   await user.save({ validateBeforeSave: false });
   return next(e);
  }
 } catch (err) {
  return next(err);
 }
});

/* PATCH - reset password */
router.patch("/reset-password/:token", async (req, res, next) => {
 const token = crypto
  .createHash("sha256")
  .update(req.params.token)
  .digest("hex");
 const user = await User.findOne({
  passwordResetToken: token,
  passwordResetExpires: { $gt: Date.now() },
 });
 if (!user) {
  return next("Token is invalid or has expired!");
 }
 /* Validate password */
 if (!req.body.password) {
  return next("Please provide a new password!");
 } else if (req.body.password.length < 5) {
  return next("Password must be at least 5 characters long!");
 } else if (req.body.password.length > 51) {
  return next("Password must be shorter than 50 characters!");
 }
 user.password = bcrypt.hashSync(req.body.password, 10);
 user.passwordResetToken = undefined;
 user.passwordResetExpires = undefined;
 user.passwordChangedAt = Date.now();

 await user.save();

 res.status(200).json({
  message: "Successfully reset password!",
 });
});

module.exports = router;

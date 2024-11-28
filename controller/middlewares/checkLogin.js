const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const userSchema = require("../../model/user");
const User = mongoose.model("User", userSchema);

const checkLogin = async (req, res, next) => {
 const { authorization } = req.headers;
 try {
  const token = authorization.split(" ")[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const { userId, name } = decoded;
  const user = await User.findOne({ _id: userId }).select("bankName email");
  const { bankName, email } = user;
  req.userId = userId;
  req.name = name;
  req.bankName = bankName;
  req.email = email;
  next();
 } catch {
  next("Authentication failed!");
 }
};

module.exports = checkLogin;

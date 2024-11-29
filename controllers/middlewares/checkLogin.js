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
  const user = await User.findOne({ _id: userId }).select("bank_name email");
  const { bank_name, email } = user;
  req.userId = userId;
  req.name = name;
  req.bank_name = bank_name;
  req.email = email;
  await User.updateOne(
   { _id: userId },
   {
    $set: {
     lastLoginAt: new Date(),
    },
   }
  );
  next();
 } catch {
  next("Authentication failed!");
 }
};

module.exports = checkLogin;

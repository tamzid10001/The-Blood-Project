const mongoose = require("mongoose");
const crypto = require("crypto");

const userSchema = mongoose.Schema({
 name: {
  type: String,
  required: true,
  validate: [
   {
    validator: function (v) {
     return /^[a-zA-Z ]+$/.test(v);
    },
    message: "Name can only contain letters and spaces!",
   },
   {
    validator: function (v) {
     return v.length > 2 && v.length < 20;
    },
    message: "Name must be longer than 2 and shorter than 20 characters!",
   },
  ],
 },
 bankName: {
  type: String,
  required: true,
  validate: [
   {
    validator: function (v) {
     return /^[a-zA-Z ]+$/.test(v);
    },
    message: "Bank name can only contain letters and spaces!",
   },
   {
    validator: function (v) {
     return v.length > 2 && v.length < 30;
    },
    message: "Bank name must be longer than 2 and shorter than 30 characters!",
   },
  ],
 },
 email: {
  type: String,
  required: true,
  unique: true,
  validate: [
   {
    validator: function (v) {
     return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
    },
    message: "Email is not valid!",
   },
   {
    validator: function (v) {
     return v.length > 5 && v.length < 50;
    },
    message: "Email must be longer than 5 and shorter than 50 characters!",
   },
  ],
 },
 password: {
  type: String,
  required: true,
 },
 iventory: [
  {
   type: mongoose.Schema.Types.ObjectId,
   ref: "Inventory",
  },
 ],
 createdAt: {
  type: Date,
  default: Date.now,
 },
 lastLoginAt: {
  type: Date,
  default: Date.now,
 },
 passwordChangedAt: Date,
 passwordResetToken: String,
 passwordResetExpires: Date,
});

userSchema.methods.createPasswordResetToken = function () {
 const resetToken = crypto.randomBytes(32).toString("hex");
 this.passwordResetToken = crypto
  .createHash("sha256")
  .update(resetToken)
  .digest("hex");
 this.passwordResetExpires = Date.now() + 10 * 60 * 1000;
 return resetToken;
};

module.exports = userSchema;

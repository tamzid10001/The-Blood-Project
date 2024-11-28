const mongoose = require("mongoose");

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
 todos: [
  {
   type: mongoose.Schema.Types.ObjectId,
   ref: "Todo",
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
});

module.exports = userSchema;

const mongoose = require("mongoose");

const inventorySchema = mongoose.Schema(
 {
  id: {
   type: String || Number,
   required: true,
   unique: true,
  },
  donor_name: {
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
  date: {
   type: Date,
   required: true,
  },
  address: {
   division: {
    type: String,
    required: true,
    validate: [
     {
      validator: function (v) {
       return /^[a-zA-Z ]+$/.test(v);
      },
      message: "Division can only contain letters and spaces!",
     },
     {
      validator: function (v) {
       return v.length > 2 && v.length < 20;
      },
      message: "Division must be longer than 2 and shorter than 20 characters!",
     },
    ],
   },
   district: {
    type: String,
    required: true,
    validate: [
     {
      validator: function (v) {
       return /^[a-zA-Z ]+$/.test(v);
      },
      message: "District can only contain letters and spaces!",
     },
     {
      validator: function (v) {
       return v.length > 2 && v.length < 20;
      },
      message: "District must be longer than 2 and shorter than 20 characters!",
     },
    ],
   },
  },
  blood_group: {
   type: String,
   required: true,
   enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
   validate: [
    {
     validator: function (v) {
      return /^[a-zA-Z+-]+$/.test(v);
     },
     message: "Blood group can only contain letters and spaces!",
    },
    {
     validator: function (v) {
      return v.length > 1 && v.length < 5;
     },
     message:
      "Blood group must be longer than 1 and shorter than 5 characters!",
    },
   ],
  },
  is_sold: {
   default: false,
   type: Boolean,
  },
 },
 {
  timestamps: true,
 }
);

module.exports = inventorySchema;

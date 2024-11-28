const mongoose = require("mongoose");

const inventorySchema = mongoose.Schema(
 {
  donorName: {
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
  id: {
   type: String,
   required: true,
   unique: true,
   validate: [
    {
     validator: function (v) {
      return /^[0-9]+$/.test(v);
     },
     message: "ID can only contain numbers!",
    },
    {
     validator: function (v) {
      return v.length > 2 && v.length < 20;
     },
     message: "ID must be longer than 2 and shorter than 20 characters!",
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
  bloodGroup: {
   type: String,
   required: true,
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
  quantity: {
   type: Number,
   required: true,
   validate: [
    {
     validator: function (v) {
      return /^[0-9]+$/.test(v);
     },
     message: "Quantity can only contain numbers!",
    },
    {
     validator: function (v) {
      return v > 0;
     },
     message: "Quantity must be greater than 0!",
    },
   ],
  },
 },
 {
  timestamps: true,
 }
);

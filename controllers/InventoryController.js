const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const checkLogin = require("./middlewares/checkLogin");
const inventorySchema = require("../models/inventory");

/* Inventory model */
const Inventory = mongoose.model("Inventory", inventorySchema);

/* GET - inventory lists */
router.get("/", checkLogin, async (req, res, next) => {
 try {
  const data = await Inventory.find();
  res.status(200).json({
   message: "Successfully retrieved inventory lists!",
   data,
  });
 } catch (err) {
  return next(err);
 }
});

/* POST - inventory lists by date */
router.post("/byDate", checkLogin, async (req, res, next) => {
 try {
  const { from, to } = req.body;
  const data = await Inventory.find();
  const specificData = await Inventory.find({
   date: { $gte: from, $lte: to },
  });
  res.status(200).json({
   message: "Successfully retrieved inventory lists!",
   info: {
    total: data.length,
    from: specificData[0].index,
    to: specificData[specificData.length - 1].index,
   },
   data: specificData,
  });
 } catch (err) {
  return next(err);
 }
});

/* POST - create inventory */
router.post("/create", checkLogin, async (req, res, next) => {
 try {
  const { donor_name, id, date, address, blood_group } = req.body;
  const data = await Inventory.create({
   donor_name,
   id: id.trim(),
   date,
   address,
   blood_group,
  });
  res.status(201).json({
   message: "Successfully created inventory!",
   data,
  });
 } catch (err) {
  return next(err);
 }
});

/* PUT - make is_sold true */
router.put("/sold/:id", checkLogin, async (req, res, next) => {
 try {
  const { id } = req.params;
  const item = await Inventory.findOneAndUpdate(
   { id: id.trim() },
   { $set: { is_sold: true } }
  );
  if (!item) {
   return res.status(404).json({ message: "Inventory item not found" });
  }
  res.status(200).json({
   message: "Successfully marked inventory as sold",
  });
 } catch (err) {
  return next(err);
 }
});

/* PUT - make is_sold false */
router.put("/unsold/:id", checkLogin, async (req, res, next) => {
 try {
  const { id } = req.params;
  const item = await Inventory.findOneAndUpdate(
   { id: id.trim() },
   { $set: { is_sold: false } }
  );
  if (!item) {
   return res.status(404).json({ message: "Inventory item not found" });
  }
  res.status(200).json({
   message: "Successfully marked inventory as unsold",
  });
 } catch (err) {
  return next(err);
 }
});

/* DELETE - delete inventory */
router.delete("/delete/:id", checkLogin, async (req, res, next) => {
 try {
  const { id } = req.params;
  await Inventory.findOneAndDelete({ id: id.trim() });
  res.status(200).json({
   message: "Successfully deleted inventory!",
  });
 } catch (err) {
  return next(err);
 }
});

/* GET - get quantity by blood group */
router.get("/quantity", checkLogin, async (req, res, next) => {
 try {
  const data = await Inventory.aggregate([
   {
    $group: {
     _id: "$blood_group",
     total: { $sum: 1 },
    },
   },
  ]);
  res.status(200).json({
   message: "Successfully retrieved quantity by blood group!",
   data,
  });
 } catch (err) {
  return next(err);
 }
});

module.exports = router;

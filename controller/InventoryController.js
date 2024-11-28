const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const checkLogin = require("./middlewares/checkLogin");
const inventorySchema = require("../model/inventory");

/* Inventory model */
const Inventory = mongoose.model("Inventory", inventorySchema);

/* POST - inventory lists by index */
router.post("/byIndex", checkLogin, async (req, res, next) => {
 try {
  const { from, to } = req.body;
  const data = await Inventory.find();
  const specificData = await Inventory.find({
   index: { $gte: from, $lte: to },
  });
  res.status(200).json({
   message: "Successfully retrieved inventory lists!",
   info: {
    total: data.length,
    from,
    to,
   },
   data: specificData,
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
   id,
   date,
   address,
   blood_group,
   index: (await Inventory.find()).length + 1,
  });
  res.status(201).json({
   message: "Successfully created inventory!",
   data,
  });
 } catch (err) {
  return next(err);
 }
});

/* UPDATE - mark status of inventory as sold */
router.put("/mark-sold/:id", checkLogin, async (req, res, next) => {
 try {
  const { id } = req.params;
  const data = await Inventory.findOneAndUpdate(
   { id },
   { is_sold: true },
   { new: true }
  );
  res.status(200).json({
   message: "Successfully marked inventory as sold!",
   data,
  });
 } catch (err) {
  return next(err);
 }
});

/* DELETE - delete inventory */
router.delete("/delete/:id", checkLogin, async (req, res, next) => {
 try {
  const { id } = req.params;
  await Inventory.findOneAndDelete({ id });
  res.status(200).json({
   message: "Successfully deleted inventory!",
  });
 } catch (err) {
  return next(err);
 }
});

module.exports = router;

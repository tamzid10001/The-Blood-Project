const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const checkLogin = require("./middlewares/checkLogin");
const inventorySchema = require("../models/inventory");

/* Inventory model */
const Inventory = mongoose.model("Inventory", inventorySchema);

/* GET - inventory list of a user */
router.get("/", checkLogin, async (req, res, next) => {
 try {
  const data = await Inventory.find({ user: req.userId });
  res.status(200).json({
   message: "Successfully retrieved inventory lists!",
   data,
  });
 } catch (err) {
  return next(err);
 }
});

/* POST - create inventory by a user */
router.post("/create", checkLogin, async (req, res, next) => {
 try {
  const { donor_name, id, date, address, blood_group } = req.body;
  const user = new mongoose.Types.ObjectId(`${req.userId}`);
  const data = await Inventory.create({
   donor_name,
   id,
   date,
   address,
   blood_group,
   user,
  });
  res.status(201).json({
   message: "Successfully created inventory!",
   data,
  });
 } catch (err) {
  return next(err);
 }
});

/* PUT - mark a inventory of a user as sold */
router.put("/sold/:id", checkLogin, async (req, res, next) => {
 try {
  const { id } = req.params;
  const userId = new mongoose.Types.ObjectId(`${req.userId}`);
  const item = await Inventory.findOneAndUpdate(
   { id: id.trim(), user: userId },
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

/* PUT - mark a inventory of a user as unsold */
router.put("/unsold/:id", checkLogin, async (req, res, next) => {
 try {
  const { id } = req.params;
  const userId = new mongoose.Types.ObjectId(`${req.userId}`);
  const item = await Inventory.findOneAndUpdate(
   { id: id.trim(), user: userId },
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

/* DELETE - delete inventory of a user */
router.delete("/delete/:id", checkLogin, async (req, res, next) => {
 try {
  const { id } = req.params;
  const userId = new mongoose.Types.ObjectId(`${req.userId}`);
  await Inventory.findOneAndDelete({ id: id.trim(), user: userId });
  res.status(200).json({
   message: "Successfully deleted inventory!",
  });
 } catch (err) {
  return next(err);
 }
});

/* GET - get quantity by blood group of a user */
router.get("/quantity", checkLogin, async (req, res, next) => {
 try {
  const userId = new mongoose.Types.ObjectId(`${req.userId}`);
  const data = await Inventory.aggregate([
   {
    $match: { user: userId },
   },
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

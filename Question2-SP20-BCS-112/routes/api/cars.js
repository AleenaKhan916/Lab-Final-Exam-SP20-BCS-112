const express = require("express");
const router = express.Router();
const Car = require("../../models/car");


router.delete("/api/cars/:id", async (req, res) => {
  let car = await Car.findById(req.params.id);
  await car.delete();
  res.send(car);
});


router.put("/api/cars/:id", async (req, res) => {
  let car = await Car.findById(req.params.id);
  car.make = req.body.make;
  car.model = req.body.Type;
  car.variant = req.body.Description;
  await car.save();
  res.send(car);
});


router.get("/api/cars/:id", async (req, res) => {
  let car = await Car.findById(req.params.id);
  res.send(car);
});


router.post("/api/cars", async (req, res) => {
  let car = new Car(req.body);
  await car.save();
  res.send(car);
});


router.get("/api/cars", async (req, res) => {
  let cars = await Car.find();
  res.send(cars);
});

module.exports = router;

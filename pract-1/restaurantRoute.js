import express, { Router } from "express";
import Restaurant from "./restaurantModel.js";

const restaurantRoute = express.Router();

restaurantRoute.post("/nearrestaurant", async function (req, res) {
  console.log("req body", req.body);
  const currentLocation = req.body.location;
  const nearestRestaurant = await Restaurant.findOne({
    location: {
      $near: {
        $geometry: currentLocation,
        $maxDistance: 1000,
      },
    },
  }).exec();
  res.send(nearestRestaurant);
});

restaurantRoute.get("/addrestaurant", async function (req, res) {
  const newRestaurant = new Restaurant({
    name: "Yuna Restaurant",
    location: {
      coordinates: [106.934593, 47.923756],
    },
  });
  newRestaurant.save();
  res.status(200).send("success");
});

export default restaurantRoute;

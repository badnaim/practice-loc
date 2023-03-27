import express, { Router } from "express";
import { nearestRestaurant } from "../services/location-service.js";
// import Restaurant from "../pract-2/restaurantModel.js";

const restaurantRoute = express.Router();

restaurantRoute.post("/nearrestaurant", async function (req, res) {
  console.log("req body", req.body);
  const result = await nearestRestaurant(req.body.location);
  if (result) {
    res.send({ restaurants: result });
  }
});

export default restaurantRoute;

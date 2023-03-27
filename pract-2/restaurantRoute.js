import express, { Router } from "express";
import Restaurant from "../pract-2/restaurantModel.js";

const restaurantRoute = express.Router();

restaurantRoute.post("/nearrestaurant", async function (req, res) {
  console.log("req body", req.body);
  const currentLocation = await Restaurant.findOne({
    location: {
      $near: " ",
    },
  });
});

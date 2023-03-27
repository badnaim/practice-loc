import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema(
  {
    name: String,
    address: {
      building: String,
      coord: {
        type: { type: String, default: "Point" },
        location: [Number],
      },
      street: String,
      zipcode: String,
    },
  },
  { collection: "restuarants" }
);

const Restaurant = mongoose.model(
  "Restaurant",
  restaurantSchema,
  "restaurants"
);

Restaurant.collection.createIndex({ "address.coord": "2dsphere" });
export default Restaurant;

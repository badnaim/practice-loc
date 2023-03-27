import "../config/mongoose-config.js";
import Restaurant from "../model/restaurantModel.js";

export async function nearestRestaurant(currentLocation) {
  return await Restaurant.find({
    "address.coord": {
      $near: {
        $geometry: currentLocation,
        $maxDistance: 100,
      },
    },
  }).exec();
}

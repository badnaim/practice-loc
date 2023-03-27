import express from "express";
import cors from "cors";
import Restaurant from "./restaurantModel.js";
import restaurantRoute from "./restaurantRoute.js";
import db from "./mongoose-config.js";

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
app.use(restaurantRoute);

app.listen(port, () => {
  console.log("listening on port", port);
});

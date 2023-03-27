import express from "express";
import cors from "cors";
import restaurantRoute from "./controllers/location-api.js";
import db from "./config/mongoose-config.js";

const app = express();
const port = 4200;

app.use(cors());
app.use(express.json());
app.use(restaurantRoute);
// app.use(db);

app.listen(port, () => {
  console.log("listening on port:", port);
});

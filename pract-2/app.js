import express from "express";
import cors from "cors";
import db from "./mongoose-config.js";

const app = express();
const port = 4200;

app.use(cors());
app.use(express.json());
app.use();

app.listen(port, () => {
  console.log("listening on port:", port);
});

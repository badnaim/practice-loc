import mongoose from "mongoose";

const db = mongoose
  .connect(
    "mongodb+srv://batnyam17:batnyam17@cluster0.gfvhelw.mongodb.net/sample_restaurants"
  )
  .then((res) => {
    console.log("mongodb sample_restaurant");
  })
  .catch((err) => {
    console.log(err, "mongoose-config aldaa");
  });

export default db;

import mongoose from "mongoose";

const db = mongoose
  .connect(
    "mongodb+srv://batnyam17:batnyam17@cluster0.gfvhelw.mongodb.net/restaurant"
  )
  .then((res) => {
    console.log("mongodb connected");
  })
  .catch((err) => {
    console.log(err, "mongoose-config aldaa");
  });

export default db;

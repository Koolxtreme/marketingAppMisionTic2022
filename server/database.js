import mongoose from "mongoose";
const URI = process.env.MONGO_URL || "mongodb://localhost:27017/crud-marketing-app";

mongoose
  .connect(URI)
  .then((db) => console.log("DB is connected"))
  .catch((err) => console.error(err));

export default mongoose;

import mongoose, { Schema } from "mongoose";

const ProductSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  imgsrc: { type: String, required: true },
  mainsrc: { type: String, required: true },
  price: { type: Number, required: true },
  rate: { type: Number, required: true },
  avgRate: { type: Array, required: false },
  pop: {type: Number, required: true}
});

export default mongoose.model("Product", ProductSchema);
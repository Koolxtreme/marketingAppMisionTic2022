import express from "express";
const router = express.Router();
import Product from "../models/Products.js";

router.get("/API/products", async (req, res) => {
  const productos = await Product.find();
  res.json(productos);
});

router.get("/API/products/:id", async (req, res) => {
  const producto = await Product.findById(req.params.id);
  res.json(producto);
});

router.post("/API/products", async (req, res) => {
  const { name, description, imgsrc, mainsrc, price, rate } = req.body;
  const newProduct = new Product({
    name,
    description,
    imgsrc,
    mainsrc,
    price,
    rate,
  });
  await newProduct.save();
  res.json({ status: "success" });
});

router.put("/API/products/:id", async (req, res) => {
  const { name, description, imgsrc, mainsrc, price, rate, avgRate } = req.body;
  const newProduct = {
    name,
    description,
    imgsrc,
    mainsrc,
    price,
    rate,
    avgRate,
  };
  await Product.findByIdAndUpdate(req.params.id, newProduct);
  res.json({ status: "Product updated" });
});

router.delete("/API/products/:id", async (req, res) => {
  await Product.findByIdAndRemove(req.params.id);
  res.json({ status: "Product deleted" });
});

export default router;

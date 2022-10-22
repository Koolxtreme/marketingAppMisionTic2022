import express from "express";
const router = express.Router();
import Product from "../models/Products.js";
import { obtenerMejores } from "../helpers/functions.js";

router.get("/API/products", async (req, res) => {
  const productos = await Product.find();
  res.json(productos);
});

router.get("/API/products/:id", async (req, res) => {
  const producto = await Product.findById(req.params.id);
  const pop = producto.pop + 1;
  await Product.findByIdAndUpdate(req.params.id, { pop });
  res.json(producto);
});

router.get("/API/bestproducts", async (req, res) => {
  const productos = await Product.find();
  const mejores = obtenerMejores(productos, false);
  res.json(mejores);
});

router.get("/API/mainproducts", async (req, res) => {
  const productos = await Product.find();
  const mejores = obtenerMejores(productos, true);
  res.json(mejores);
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
    pop: 0,
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

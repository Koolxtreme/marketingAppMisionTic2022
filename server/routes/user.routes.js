import express from "express";
const router = express.Router();
import User from "../models/User.js";

router.get("/API/users", async (req, res) => {
  const usuarios = await User.find();
  res.json(usuarios);
});

router.get("/API/users/:id", async (req, res) => {
  const usuario = await User.findById(req.params.id);
  res.json(usuario);
});

router.post("/API/users/login", async (req, res) => {
  const logeante = req.body;
  const usuario = await User.findOne({ username: logeante.username }, {});
  const resultado = logeante.password === usuario.password;
  if (resultado)
    res.json({
      resultado,
      id: usuario._id,
    });
  else res.json({ resultado, id: null });
});

router.post("/API/users", async (req, res) => {
  const { username, email, password } = req.body;
  const newUser = new User({
    username,
    email,
    password,
  });
  await newUser.save();
  res.json({ status: "success" });
});

router.put("/API/users/:id", async (req, res) => {
  const { username, email, password } = req.body;
  const newUser = { username, email, password };
  await User.findByIdAndUpdate(req.params.id, newUser);
  res.json({ status: "user updated" });
});

router.delete("/API/users/:id", async (req, res) => {
  await User.findByIdAndRemove(req.params.id);
  res.json({ status: "user deleted" });
});

export default router;

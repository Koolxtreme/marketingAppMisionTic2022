import express from "express";
const router = express.Router();

import userRoutes from "./user.routes.js"
import productsRoutes from "./products.routes.js"

router.use(userRoutes)
router.use(productsRoutes)

export default router;
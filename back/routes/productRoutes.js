import express from "express";
import {
  getProducts,
  postProducts,
  deletedProduct,
} from "../controllers/productControllers.js";
const router = express.Router();
router
  .get("/product", getProducts)
  .post("/product", postProducts)
  .delete("/product/:id", deletedProduct);

  export default router
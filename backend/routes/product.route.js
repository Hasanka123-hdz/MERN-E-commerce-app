import express from "express";
const router = express.Router();
import { protectRoute, adminRoute } from "../middleware/auth.middleware.js";
import { getAllProducts, getFeaturedProducts, createProduct, deleteProduct, getRecommendedProducts, getProductsByCategory, toggleFeaturedProduct } from "../controllers/product.controller.js";

router.get("/", protectRoute, adminRoute, getAllProducts);
router.get("/featured", getFeaturedProducts);
router.get("/category/:category", getProductsByCategory);
router.get("/recommendations", getRecommendedProducts);
router.post("/", protectRoute, adminRoute, createProduct);
router.patch("/:id", protectRoute, adminRoute, toggleFeaturedProduct);
router.delete("/:id", protectRoute, adminRoute, deleteProduct);

export default router

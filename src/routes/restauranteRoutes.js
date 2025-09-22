import express from "express";
import {
  getAllRestaurantes,
  getRestaurantesById,
} from "../controllers/restauranteControllers.js";

const router = express.Router();

router.get("/", getAllRestaurantes);
router.get("/:id", getRestaurantesById);

export default router;

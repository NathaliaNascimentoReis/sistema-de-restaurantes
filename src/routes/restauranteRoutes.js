import express from "express";
import {
  getAllRestaurantes,
  getRestaurantesById,
  createRestaurante,
} from "../controllers/restauranteControllers.js";

const router = express.Router();

router.get("/", getAllRestaurantes);
router.get("/:id", getRestaurantesById);
router.post("/", createRestaurante);

export default router;

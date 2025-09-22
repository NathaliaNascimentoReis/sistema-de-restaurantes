import express from "express";
import {
  getAllRestaurantes,
  getRestaurantesById,
  createRestaurante,
  deleteRestaurantesById,
  updateRestaurante,
} from "../controllers/restauranteControllers.js";

const router = express.Router();

router.get("/", getAllRestaurantes);
router.delete("/:id", deleteRestaurantesById);
router.get("/:id", getRestaurantesById);
router.post("/", createRestaurante);
router.put("/:id", updateRestaurante);

export default router;

import express from "express";
import { getAllRestaurantes } from "../controllers/restauranteControllers.js";

const router = express.Router();

router.get("/", getAllRestaurantes);

export default router;

import { Router } from "express";
const router = Router();
import {
  getAllScores,
  getScoreById,
  createScore,
  updateScore,
  deleteScore,
} from "../controllers/scoreController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

router.get("/", getAllScores);
router.get("/:id", getScoreById);
router.post("/", createScore);
router.put("/:id", updateScore);
router.delete("/:id", deleteScore);

export default router;

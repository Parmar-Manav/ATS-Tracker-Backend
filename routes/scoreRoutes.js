import { Router } from "express";
const router = Router();
import {
  getAllScores,
  getScoreById,
  createScore,
  updateScore,
  deleteScore,
} from "../controllers/scoreController.js";
import authMiddleware from "../middleware/authMiddleware.js";

router.get("/", authMiddleware, getAllScores);
router.get("/:id", authMiddleware, getScoreById);
router.post("/", authMiddleware, createScore);
router.put("/:id", authMiddleware, updateScore);
router.delete("/:id", authMiddleware, deleteScore);

export default router;

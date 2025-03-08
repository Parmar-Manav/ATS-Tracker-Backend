import { Router } from "express";
const router = Router();
import {
  getAllApplicationStageHistories,
  getApplicationStageHistoryById,
  createApplicationStageHistory,
  updateApplicationStageHistory,
  deleteApplicationStageHistory,
} from "../controllers/applicationStageHistoryController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

router.get("/", authMiddleware, getAllApplicationStageHistories);
router.get("/:id", authMiddleware, getApplicationStageHistoryById);
router.post("/", authMiddleware, createApplicationStageHistory);
router.put("/:id", authMiddleware, updateApplicationStageHistory);
router.delete("/:id", authMiddleware, deleteApplicationStageHistory);

export default router;

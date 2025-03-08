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

router.get("/", getAllApplicationStageHistories);
router.get("/:id", getApplicationStageHistoryById);
router.post("/", createApplicationStageHistory);
router.put("/:id", updateApplicationStageHistory);
router.delete("/:id", deleteApplicationStageHistory);

export default router;

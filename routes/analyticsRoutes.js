import { Router } from "express";
const router = Router();
import {
  getAllAnalytics,
  getAnalyticsById,
  createAnalytics,
  updateAnalytics,
  deleteAnalytics,
} from "../controllers/analyticsController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

router.get("/", authMiddleware, getAllAnalytics);
router.get("/:id", authMiddleware, getAnalyticsById);
router.post("/", authMiddleware, createAnalytics);
router.put("/:id", authMiddleware, updateAnalytics);
router.delete("/:id", authMiddleware, deleteAnalytics);

export default router;
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

router.get("/", getAllAnalytics);
router.get("/:id", getAnalyticsById);
router.post("/", createAnalytics);
router.put("/:id", updateAnalytics);
router.delete("/:id", deleteAnalytics);

export default router;
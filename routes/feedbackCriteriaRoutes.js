import { Router } from "express";
const router = Router();
import {
  getAllFeedbackCriteria,
  getFeedbackCriteriaById,
  createFeedbackCriteria,
  updateFeedbackCriteria,
  deleteFeedbackCriteria,
} from "../controllers/feedbackCriteriaController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

router.get("/", authMiddleware, getAllFeedbackCriteria);
router.get("/:id", authMiddleware, getFeedbackCriteriaById);
router.post("/", authMiddleware, createFeedbackCriteria);
router.put("/:id", authMiddleware, updateFeedbackCriteria);
router.delete("/:id", authMiddleware, deleteFeedbackCriteria);

export default router;

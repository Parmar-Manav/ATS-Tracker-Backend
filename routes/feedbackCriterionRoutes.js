import { Router } from "express";
const router = Router();
import {
  getAllFeedbackCriteria,
  getFeedbackCriterionById,
  createFeedbackCriterion,
  updateFeedbackCriterion,
  deleteFeedbackCriterion,
} from "../controllers/feedbackCriterionController.js";
import authMiddleware from "../middleware/authMiddleware.js";

router.get("/", authMiddleware, getAllFeedbackCriteria);
router.get("/:id", authMiddleware, getFeedbackCriterionById);
router.post("/", authMiddleware, createFeedbackCriterion);
router.put("/:id", authMiddleware, updateFeedbackCriterion);
router.delete("/:id", authMiddleware, deleteFeedbackCriterion);

export default router;

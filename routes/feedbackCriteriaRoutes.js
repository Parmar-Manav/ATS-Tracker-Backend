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

router.get("/", getAllFeedbackCriteria);
router.get("/:id", getFeedbackCriteriaById);
router.post("/", createFeedbackCriteria);
router.put("/:id", updateFeedbackCriteria);
router.delete("/:id", deleteFeedbackCriteria);

export default router;

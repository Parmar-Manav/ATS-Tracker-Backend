import { Router } from "express";
const router = Router();
import {
  getAllFeedback,
  getFeedbackById,
  createFeedback,
  updateFeedback,
  deleteFeedback,
} from "../controllers/feedbackController.js";
import authMiddleware from "../middleware/authMiddleware.js";

router.get("/", authMiddleware, getAllFeedback);
router.get("/:id", authMiddleware, getFeedbackById);
router.post("/", authMiddleware, createFeedback);
router.put("/:id", authMiddleware, updateFeedback);
router.delete("/:id", authMiddleware, deleteFeedback);

export default router;

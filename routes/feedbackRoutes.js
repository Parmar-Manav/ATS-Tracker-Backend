import { Router } from "express";
const router = Router();
import {
  getAllFeedback,
  getFeedbackById,
  createFeedback,
  updateFeedback,
  deleteFeedback,
} from "../controllers/feedbackController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

router.get("/", getAllFeedback);
router.get("/:id", getFeedbackById);
router.post("/", createFeedback);
router.put("/:id", updateFeedback);
router.delete("/:id", deleteFeedback);

export default router;

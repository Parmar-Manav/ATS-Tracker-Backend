import { Router } from "express";
const router = Router();
import {
  getAllInterviews,
  getInterviewById,
  createInterview,
  updateInterview,
  deleteInterview,
} from "../controllers/interviewController.js";
import authMiddleware from "../middleware/authMiddleware.js";

router.get("/", authMiddleware, getAllInterviews);
router.get("/:id", authMiddleware, getInterviewById);
router.post("/", authMiddleware, createInterview);
router.put("/:id", authMiddleware, updateInterview);
router.delete("/:id", authMiddleware, deleteInterview);

export default router;

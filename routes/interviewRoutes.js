import { Router } from "express";
const router = Router();
import {
  getAllInterviews,
  getInterviewById,
  createInterview,
  updateInterview,
  deleteInterview,
} from "../controllers/interviewController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

router.get("/", getAllInterviews);
router.get("/:id", getInterviewById);
router.post("/", createInterview);
router.put("/:id", updateInterview);
router.delete("/:id", deleteInterview);

export default router;

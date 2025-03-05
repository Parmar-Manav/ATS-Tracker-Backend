import { Router } from "express";
const router = Router();
import {
  getAllOnboardingTasks,
  getOnboardingTaskById,
  createOnboardingTask,
  updateOnboardingTask,
  deleteOnboardingTask,
} from "../controllers/onboardingTaskController.js";
import authMiddleware from "../middleware/authMiddleware.js";

router.get("/", authMiddleware, getAllOnboardingTasks);
router.get("/:id", authMiddleware, getOnboardingTaskById);
router.post("/", authMiddleware, createOnboardingTask);
router.put("/:id", authMiddleware, updateOnboardingTask);
router.delete("/:id", authMiddleware, deleteOnboardingTask);

export default router;

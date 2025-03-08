import { Router } from "express";
const router = Router();
import {
  getAllOnboardingTasks,
  getOnboardingTaskById,
  createOnboardingTask,
  updateOnboardingTask,
  deleteOnboardingTask,
} from "../controllers/onboardingTaskController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

router.get("/", getAllOnboardingTasks);
router.get("/:id", getOnboardingTaskById);
router.post("/", createOnboardingTask);
router.put("/:id", updateOnboardingTask);
router.delete("/:id", deleteOnboardingTask);

export default router;

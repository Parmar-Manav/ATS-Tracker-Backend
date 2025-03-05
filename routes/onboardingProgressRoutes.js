import { Router } from "express";
const router = Router();
import {
  getAllOnboardingProgresses,
  getOnboardingProgressById,
  createOnboardingProgress,
  updateOnboardingProgress,
  deleteOnboardingProgress,
} from "../controllers/onboardingProgressController.js";
import authMiddleware from "../middleware/authMiddleware.js";

router.get("/", authMiddleware, getAllOnboardingProgresses);
router.get("/:id", authMiddleware, getOnboardingProgressById);
router.post("/", authMiddleware, createOnboardingProgress);
router.put("/:id", authMiddleware, updateOnboardingProgress);
router.delete("/:id", authMiddleware, deleteOnboardingProgress);

export default router;

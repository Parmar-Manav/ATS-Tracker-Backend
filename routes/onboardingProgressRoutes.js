import { Router } from "express";
const router = Router();
import {
  getAllOnboardingProgresses,
  getOnboardingProgressById,
  createOnboardingProgress,
  updateOnboardingProgress,
  deleteOnboardingProgress,
} from "../controllers/onboardingProgressController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

router.get("/", getAllOnboardingProgresses);
router.get("/:id", getOnboardingProgressById);
router.post("/", createOnboardingProgress);
router.put("/:id", updateOnboardingProgress);
router.delete("/:id", deleteOnboardingProgress);

export default router;

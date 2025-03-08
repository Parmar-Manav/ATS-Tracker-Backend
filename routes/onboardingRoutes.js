import { Router } from "express";
const router = Router();
import {
  getAllOnboardings,
  getOnboardingById,
  createOnboarding,
  updateOnboarding,
  deleteOnboarding,
} from "../controllers/onboardingController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

router.get("/", authMiddleware, getAllOnboardings);
router.get("/:id", authMiddleware, getOnboardingById);
router.post("/", authMiddleware, createOnboarding);
router.put("/:id", authMiddleware, updateOnboarding);
router.delete("/:id", authMiddleware, deleteOnboarding);

export default router;

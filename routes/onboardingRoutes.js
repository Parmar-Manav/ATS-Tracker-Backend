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

router.get("/", getAllOnboardings);
router.get("/:id", getOnboardingById);
router.post("/", createOnboarding);
router.put("/:id", updateOnboarding);
router.delete("/:id", deleteOnboarding);

export default router;

import { Router } from "express";
const router = Router();
import {
  getAllOnboardingTemplates,
  getOnboardingTemplateById,
  createOnboardingTemplate,
  updateOnboardingTemplate,
  deleteOnboardingTemplate,
} from "../controllers/onboardingTemplateController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

router.get("/", getAllOnboardingTemplates);
router.get("/:id", getOnboardingTemplateById);
router.post("/", createOnboardingTemplate);
router.put("/:id", updateOnboardingTemplate);
router.delete("/:id", deleteOnboardingTemplate);

export default router;

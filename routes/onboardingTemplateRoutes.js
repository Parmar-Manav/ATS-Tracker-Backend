import { Router } from "express";
const router = Router();
import {
  getAllOnboardingTemplates,
  getOnboardingTemplateById,
  createOnboardingTemplate,
  updateOnboardingTemplate,
  deleteOnboardingTemplate,
} from "../controllers/onboardingTemplateController.js";
import authMiddleware from "../middleware/authMiddleware.js";

router.get("/", authMiddleware, getAllOnboardingTemplates);
router.get("/:id", authMiddleware, getOnboardingTemplateById);
router.post("/", authMiddleware, createOnboardingTemplate);
router.put("/:id", authMiddleware, updateOnboardingTemplate);
router.delete("/:id", authMiddleware, deleteOnboardingTemplate);

export default router;

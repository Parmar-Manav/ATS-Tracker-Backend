import { Router } from "express";
const router = Router();
import {
  getAllOnboardingTemplateStructures,
  getOnboardingTemplateStructureById,
  createOnboardingTemplateStructure,
  updateOnboardingTemplateStructure,
  deleteOnboardingTemplateStructure,
} from "../controllers/onboardingTemplateStructureController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

router.get("/", authMiddleware, getAllOnboardingTemplateStructures);
router.get("/:id", authMiddleware, getOnboardingTemplateStructureById);
router.post("/", authMiddleware, createOnboardingTemplateStructure);
router.put("/:id", authMiddleware, updateOnboardingTemplateStructure);
router.delete("/:id", authMiddleware, deleteOnboardingTemplateStructure);

export default router;

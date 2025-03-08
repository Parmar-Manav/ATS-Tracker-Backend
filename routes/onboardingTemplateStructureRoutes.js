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

router.get("/", getAllOnboardingTemplateStructures);
router.get("/:id", getOnboardingTemplateStructureById);
router.post("/", createOnboardingTemplateStructure);
router.put("/:id", updateOnboardingTemplateStructure);
router.delete("/:id", deleteOnboardingTemplateStructure);

export default router;

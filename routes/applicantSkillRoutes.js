import { Router } from "express";
const router = Router();
import {
  getAllApplicantSkills,
  getApplicantSkillById,
  createApplicantSkill,
  updateApplicantSkill,
  deleteApplicantSkill,
} from "../controllers/applicantSkillController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

router.get("/", authMiddleware, getAllApplicantSkills);
router.get("/:id", authMiddleware, getApplicantSkillById);
router.post("/", authMiddleware, createApplicantSkill);
router.put("/:id", authMiddleware, updateApplicantSkill);
router.delete("/:id", authMiddleware, deleteApplicantSkill);

export default router;

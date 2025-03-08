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

router.get("/", getAllApplicantSkills);
router.get("/:id", getApplicantSkillById);
router.post("/", createApplicantSkill);
router.put("/:id", updateApplicantSkill);
router.delete("/:id", deleteApplicantSkill);

export default router;

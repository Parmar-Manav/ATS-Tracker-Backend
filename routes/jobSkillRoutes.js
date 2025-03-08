import { Router } from "express";
const router = Router();
import {
  getAllJobSkills,
  getJobSkillById,
  createJobSkill,
  updateJobSkill,
  deleteJobSkill,
} from "../controllers/jobSkillController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

router.get("/", getAllJobSkills);
router.get("/:id", getJobSkillById);
router.post("/", createJobSkill);
router.put("/:id", updateJobSkill);
router.delete("/:id", deleteJobSkill);

export default router;

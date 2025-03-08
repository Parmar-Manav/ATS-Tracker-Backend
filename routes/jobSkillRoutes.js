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

router.get("/", authMiddleware, getAllJobSkills);
router.get("/:id", authMiddleware, getJobSkillById);
router.post("/", authMiddleware, createJobSkill);
router.put("/:id", authMiddleware, updateJobSkill);
router.delete("/:id", authMiddleware, deleteJobSkill);

export default router;

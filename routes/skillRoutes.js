import { Router } from "express";
const router = Router();
import {
  getAllSkills,
  getSkillById,
  createSkill,
  updateSkill,
  deleteSkill,
} from "../controllers/skillController.js";
import authMiddleware from "../middleware/authMiddleware.js";

router.get("/", authMiddleware, getAllSkills);
router.get("/:id", authMiddleware, getSkillById);
router.post("/", authMiddleware, createSkill);
router.put("/:id", authMiddleware, updateSkill);
router.delete("/:id", authMiddleware, deleteSkill);

export default router;

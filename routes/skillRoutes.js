import { Router } from "express";
const router = Router();
import {
  getAllSkills,
  getSkillById,
  createSkill,
  updateSkill,
  deleteSkill,
} from "../controllers/skillController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

router.get("/", getAllSkills);
router.get("/:id", getSkillById);
router.post("/", createSkill);
router.put("/:id", updateSkill);
router.delete("/:id", deleteSkill);

export default router;

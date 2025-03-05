import { Router } from "express";
const router = Router();
import {
  getAllTeamMembers,
  getTeamMemberById,
  createTeamMember,
  updateTeamMember,
  deleteTeamMember,
} from "../controllers/teamMemberController.js";
import authMiddleware from "../middleware/authMiddleware.js";

router.get("/", authMiddleware, getAllTeamMembers);
router.get("/:id", authMiddleware, getTeamMemberById);
router.post("/", authMiddleware, createTeamMember);
router.put("/:id", authMiddleware, updateTeamMember);
router.delete("/:id", authMiddleware, deleteTeamMember);

export default router;

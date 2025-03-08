import { Router } from "express";
const router = Router();
import {
  getAllTeamMembers,
  getTeamMemberById,
  createTeamMember,
  updateTeamMember,
  deleteTeamMember,
} from "../controllers/teamMemberController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

router.get("/", getAllTeamMembers);
router.get("/:id", getTeamMemberById);
router.post("/", createTeamMember);
router.put("/:id", updateTeamMember);
router.delete("/:id", deleteTeamMember);

export default router;

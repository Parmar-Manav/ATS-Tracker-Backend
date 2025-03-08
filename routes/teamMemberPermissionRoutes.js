import { Router } from "express";
const router = Router();
import {
  getAllTeamMemberPermissions,
  getTeamMemberPermissionById,
  createTeamMemberPermission,
  updateTeamMemberPermission,
  deleteTeamMemberPermission,
} from "../controllers/teamMemberPermissionController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

router.get("/", authMiddleware, getAllTeamMemberPermissions);
router.get("/:id", authMiddleware, getTeamMemberPermissionById);
router.post("/", authMiddleware, createTeamMemberPermission);
router.put("/:id", authMiddleware, updateTeamMemberPermission);
router.delete("/:id", authMiddleware, deleteTeamMemberPermission);

export default router;

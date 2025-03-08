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

router.get("/", getAllTeamMemberPermissions);
router.get("/:id", getTeamMemberPermissionById);
router.post("/", createTeamMemberPermission);
router.put("/:id", updateTeamMemberPermission);
router.delete("/:id", deleteTeamMemberPermission);

export default router;

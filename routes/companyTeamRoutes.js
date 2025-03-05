import { Router } from "express";
const router = Router();
import {
  getAllCompanyTeams,
  getCompanyTeamById,
  createCompanyTeam,
  updateCompanyTeam,
  deleteCompanyTeam,
} from "../controllers/companyTeamController.js";
import authMiddleware from "../middleware/authMiddleware.js";

router.get("/", authMiddleware, getAllCompanyTeams);
router.get("/:id", authMiddleware, getCompanyTeamById);
router.post("/", authMiddleware, createCompanyTeam);
router.put("/:id", authMiddleware, updateCompanyTeam);
router.delete("/:id", authMiddleware, deleteCompanyTeam);

export default router;

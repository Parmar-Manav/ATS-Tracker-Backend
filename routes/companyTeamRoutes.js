import { Router } from "express";
const router = Router();
import {
  getAllCompanyTeams,
  getCompanyTeamById,
  createCompanyTeam,
  updateCompanyTeam,
  deleteCompanyTeam,
} from "../controllers/companyTeamController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

router.get("/", getAllCompanyTeams);
router.get("/:id", getCompanyTeamById);
router.post("/", createCompanyTeam);
router.put("/:id", updateCompanyTeam);
router.delete("/:id", deleteCompanyTeam);

export default router;

import { Router } from "express";
const router = Router();
import {
  getAllWorkflowMasters,
  getWorkflowMasterById,
  createWorkflowMaster,
  updateWorkflowMaster,
  deleteWorkflowMaster,
} from "../controllers/workflowMasterController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

router.get("/", getAllWorkflowMasters);
router.get("/:id", getWorkflowMasterById);
router.post("/", createWorkflowMaster);
router.put("/:id", updateWorkflowMaster);
router.delete("/:id", deleteWorkflowMaster);

export default router;

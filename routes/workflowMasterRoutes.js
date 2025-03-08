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

router.get("/", authMiddleware, getAllWorkflowMasters);
router.get("/:id", authMiddleware, getWorkflowMasterById);
router.post("/", authMiddleware, createWorkflowMaster);
router.put("/:id", authMiddleware, updateWorkflowMaster);
router.delete("/:id", authMiddleware, deleteWorkflowMaster);

export default router;

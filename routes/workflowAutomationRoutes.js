import { Router } from "express";
const router = Router();
import {
  getAllWorkflowAutomations,
  getWorkflowAutomationById,
  createWorkflowAutomation,
  updateWorkflowAutomation,
  deleteWorkflowAutomation,
} from "../controllers/workflowAutomationController.js";
import authMiddleware from "../middleware/authMiddleware.js";

router.get("/", authMiddleware, getAllWorkflowAutomations);
router.get("/:id", authMiddleware, getWorkflowAutomationById);
router.post("/", authMiddleware, createWorkflowAutomation);
router.put("/:id", authMiddleware, updateWorkflowAutomation);
router.delete("/:id", authMiddleware, deleteWorkflowAutomation);

export default router;

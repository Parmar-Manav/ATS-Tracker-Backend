import { Router } from "express";
const router = Router();
import {
  getAllWorkflows,
  getWorkflowById,
  createWorkflow,
  updateWorkflow,
  deleteWorkflow,
} from "../controllers/workflowController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

router.get("/", authMiddleware, getAllWorkflows);
router.get("/:id", authMiddleware, getWorkflowById);
router.post("/", authMiddleware, createWorkflow);
router.put("/:id", authMiddleware, updateWorkflow);
router.delete("/:id", authMiddleware, deleteWorkflow);

export default router;

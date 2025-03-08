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

router.get("/", getAllWorkflows);
router.get("/:id", getWorkflowById);
router.post("/", createWorkflow);
router.put("/:id", updateWorkflow);
router.delete("/:id", deleteWorkflow);

export default router;

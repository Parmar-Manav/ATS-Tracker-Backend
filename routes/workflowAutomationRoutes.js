import { Router } from "express";
const router = Router();
import {
  getAllWorkflowAutomations,
  getWorkflowAutomationById,
  createWorkflowAutomation,
  updateWorkflowAutomation,
  deleteWorkflowAutomation,
} from "../controllers/workflowAutomationController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

router.get("/", getAllWorkflowAutomations);
router.get("/:id", getWorkflowAutomationById);
router.post("/", createWorkflowAutomation);
router.put("/:id", updateWorkflowAutomation);
router.delete("/:id", deleteWorkflowAutomation);

export default router;

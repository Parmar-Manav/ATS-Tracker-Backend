import { Router } from "express";
const router = Router();
import {
  getAllOperationLogs,
  getOperationLogById,
  createOperationLog,
  updateOperationLog,
  deleteOperationLog,
} from "../controllers/operationLogController.js";
import authMiddleware from "../middleware/authMiddleware.js";

router.get("/", authMiddleware, getAllOperationLogs);
router.get("/:id", authMiddleware, getOperationLogById);
router.post("/", authMiddleware, createOperationLog);
router.put("/:id", authMiddleware, updateOperationLog);
router.delete("/:id", authMiddleware, deleteOperationLog);

export default router;

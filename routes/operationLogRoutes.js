import { Router } from "express";
const router = Router();
import {
  getAllOperationLogs,
  getOperationLogById,
  createOperationLog,
  updateOperationLog,
  deleteOperationLog,
} from "../controllers/operationLogController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

router.get("/", getAllOperationLogs);
router.get("/:id", getOperationLogById);
router.post("/", createOperationLog);
router.put("/:id", updateOperationLog);
router.delete("/:id", deleteOperationLog);

export default router;

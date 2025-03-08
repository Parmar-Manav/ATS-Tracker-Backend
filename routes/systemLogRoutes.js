import { Router } from "express";
const router = Router();
import {
  getAllSystemLogs,
  getSystemLogById,
  createSystemLog,
  updateSystemLog,
  deleteSystemLog,
} from "../controllers/systemLogController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

router.get("/", authMiddleware, getAllSystemLogs);
router.get("/:id", authMiddleware, getSystemLogById);
router.post("/", authMiddleware, createSystemLog);
router.put("/:id", authMiddleware, updateSystemLog);
router.delete("/:id", authMiddleware, deleteSystemLog);

export default router;

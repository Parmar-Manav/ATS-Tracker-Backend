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

router.get("/", getAllSystemLogs);
router.get("/:id", getSystemLogById);
router.post("/", createSystemLog);
router.put("/:id", updateSystemLog);
router.delete("/:id", deleteSystemLog);

export default router;

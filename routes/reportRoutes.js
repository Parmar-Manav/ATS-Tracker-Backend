import { Router } from "express";
const router = Router();
import {
  getAllReports,
  getReportById,
  createReport,
  updateReport,
  deleteReport,
} from "../controllers/reportController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

router.get("/", authMiddleware, getAllReports);
router.get("/:id", authMiddleware, getReportById);
router.post("/", authMiddleware, createReport);
router.put("/:id", authMiddleware, updateReport);
router.delete("/:id", authMiddleware, deleteReport);

export default router;

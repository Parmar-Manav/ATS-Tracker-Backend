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

router.get("/", getAllReports);
router.get("/:id", getReportById);
router.post("/", createReport);
router.put("/:id", updateReport);
router.delete("/:id", deleteReport);

export default router;

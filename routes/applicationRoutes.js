import { Router } from "express";
const router = Router();
import {
  getAllApplications,
  getApplicationById,
  createApplication,
  updateApplication,
  deleteApplication,
} from "../controllers/applicationController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

router.get("/", authMiddleware, getAllApplications);
router.get("/:id", authMiddleware, getApplicationById);
router.post("/", authMiddleware, createApplication);
router.put("/:id", authMiddleware, updateApplication);
router.delete("/:id", authMiddleware, deleteApplication);

export default router;

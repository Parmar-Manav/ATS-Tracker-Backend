import { Router } from "express";
const router = Router();
import {
  getAllJobPreferences,
  getJobPreferenceById,
  createJobPreference,
  updateJobPreference,
  deleteJobPreference,
} from "../controllers/jobPreferenceController.js";
import authMiddleware from "../middleware/authMiddleware.js";

router.get("/", authMiddleware, getAllJobPreferences);
router.get("/:id", authMiddleware, getJobPreferenceById);
router.post("/", authMiddleware, createJobPreference);
router.put("/:id", authMiddleware, updateJobPreference);
router.delete("/:id", authMiddleware, deleteJobPreference);

export default router;

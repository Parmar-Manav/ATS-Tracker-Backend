import { Router } from "express";
const router = Router();
import {
  getAllJobPreferences,
  getJobPreferenceById,
  createJobPreference,
  updateJobPreference,
  deleteJobPreference,
} from "../controllers/jobPreferenceController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

router.get("/", getAllJobPreferences);
router.get("/:id", getJobPreferenceById);
router.post("/", createJobPreference);
router.put("/:id", updateJobPreference);
router.delete("/:id", deleteJobPreference);

export default router;

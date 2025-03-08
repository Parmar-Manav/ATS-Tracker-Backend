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

router.get("/", getAllApplications);
router.get("/:id", getApplicationById);
router.post("/", createApplication);
router.put("/:id", updateApplication);
router.delete("/:id", deleteApplication);

export default router;

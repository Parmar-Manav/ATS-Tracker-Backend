import { Router } from "express";
const router = Router();
import {
  getAllJobs,
  getJobById,
  createJob,
  updateJob,
  deleteJob,
} from "../controllers/jobController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

router.get("/", authMiddleware, getAllJobs);
router.get("/:id", authMiddleware, getJobById);
router.post("/", authMiddleware, createJob);
router.put("/:id", authMiddleware, updateJob);
router.delete("/:id", authMiddleware, deleteJob);

export default router;

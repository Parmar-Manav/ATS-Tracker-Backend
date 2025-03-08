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

router.get("/", getAllJobs);
router.get("/:id", getJobById);
router.post("/", createJob);
router.put("/:id", updateJob);
router.delete("/:id", deleteJob);

export default router;

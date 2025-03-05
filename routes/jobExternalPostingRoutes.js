import { Router } from "express";
const router = Router();
import {
  getAllJobExternalPostings,
  getJobExternalPostingById,
  createJobExternalPosting,
  updateJobExternalPosting,
  deleteJobExternalPosting,
} from "../controllers/jobExternalPostingController.js";
import authMiddleware from "../middleware/authMiddleware.js";

router.get("/", authMiddleware, getAllJobExternalPostings);
router.get("/:id", authMiddleware, getJobExternalPostingById);
router.post("/", authMiddleware, createJobExternalPosting);
router.put("/:id", authMiddleware, updateJobExternalPosting);
router.delete("/:id", authMiddleware, deleteJobExternalPosting);

export default router;

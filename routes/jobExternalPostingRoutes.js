import { Router } from "express";
const router = Router();
import {
  getAllJobExternalPostings,
  getJobExternalPostingById,
  createJobExternalPosting,
  updateJobExternalPosting,
  deleteJobExternalPosting,
} from "../controllers/jobExternalPostingController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

router.get("/", getAllJobExternalPostings);
router.get("/:id", getJobExternalPostingById);
router.post("/", createJobExternalPosting);
router.put("/:id", updateJobExternalPosting);
router.delete("/:id", deleteJobExternalPosting);

export default router;

import { Router } from "express";
const router = Router();
import {
  getAllResumeSections,
  getResumeSectionById,
  createResumeSection,
  updateResumeSection,
  deleteResumeSection,
} from "../controllers/resumeSectionController.js";
import authMiddleware from "../middleware/authMiddleware.js";

router.get("/", authMiddleware, getAllResumeSections);
router.get("/:id", authMiddleware, getResumeSectionById);
router.post("/", authMiddleware, createResumeSection);
router.put("/:id", authMiddleware, updateResumeSection);
router.delete("/:id", authMiddleware, deleteResumeSection);

export default router;

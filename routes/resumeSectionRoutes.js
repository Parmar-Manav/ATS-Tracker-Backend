import { Router } from "express";
const router = Router();
import {
  getAllResumeSections,
  getResumeSectionById,
  createResumeSection,
  updateResumeSection,
  deleteResumeSection,
} from "../controllers/resumeSectionController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

router.get("/", getAllResumeSections);
router.get("/:id", getResumeSectionById);
router.post("/", createResumeSection);
router.put("/:id", updateResumeSection);
router.delete("/:id", deleteResumeSection);

export default router;

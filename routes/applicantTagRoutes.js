import { Router } from "express";
const router = Router();
import {
  getAllApplicantTags,
  getApplicantTagById,
  createApplicantTag,
  updateApplicantTag,
  deleteApplicantTag,
} from "../controllers/applicantTagController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

router.get("/", authMiddleware, getAllApplicantTags);
router.get("/:id", authMiddleware, getApplicantTagById);
router.post("/", authMiddleware, createApplicantTag);
router.put("/:id", authMiddleware, updateApplicantTag);
router.delete("/:id", authMiddleware, deleteApplicantTag);

export default router;

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

router.get("/", getAllApplicantTags);
router.get("/:id", getApplicantTagById);
router.post("/", createApplicantTag);
router.put("/:id", updateApplicantTag);
router.delete("/:id", deleteApplicantTag);

export default router;

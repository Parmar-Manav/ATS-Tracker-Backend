import express from "express";
import * as applicantController from "../controllers/applicantController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware, applicantController.getAllApplicants);
router.get("/:id", authMiddleware, applicantController.getApplicantById);
router.post("/", authMiddleware, applicantController.createApplicant);
router.put("/:id", authMiddleware, applicantController.updateApplicant);
router.delete("/:id", authMiddleware, applicantController.deleteApplicant);

export default router;

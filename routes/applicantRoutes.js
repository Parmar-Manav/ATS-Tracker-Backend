import express from "express";
import * as applicantController from "../controllers/applicantController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", applicantController.getAllApplicants);
router.get("/:id", applicantController.getApplicantById);
router.post("/", applicantController.createApplicant);
router.put("/:id", applicantController.updateApplicant);
router.delete("/:id", applicantController.deleteApplicant);

export default router;

import express from "express";
import * as applicantController from "../controllers/applicantController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", applicantController.getAllApplicants);
router.get("/search", applicantController.searchApplicants); // Search applicants by name or email
router.get("/filter", applicantController.filterApplicantsByStatus); // Filter applicants by status
router.get("/:id", applicantController.getApplicantById);
router.post("/", applicantController.createApplicant);
router.post("/bulk", applicantController.bulkCreateApplicants);
router.put("/:id", applicantController.updateApplicant);
router.delete("/bulk-delete", applicantController.bulkDeleteApplicants);
router.delete("/:id", applicantController.deleteApplicant);
router.get("/export/csv", applicantController.exportApplicantsCSV); // Export applicants as CSV

export default router;

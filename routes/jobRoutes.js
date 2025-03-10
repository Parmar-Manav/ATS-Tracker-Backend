import { Router } from "express";
const router = Router();
import * as jobController from "../controllers/jobController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

router.get("/", jobController.getAllJobs);
router.get("/:id", jobController.getJobById);
router.post("/bulk", jobController.bulkCreateJobs)
router.post("/", jobController.createJob);
router.put("/:id", jobController.updateJob);
router.delete("/bulk-delete", jobController.bulkDeleteJobs);
router.delete("/:id", jobController.deleteJob);

export default router;

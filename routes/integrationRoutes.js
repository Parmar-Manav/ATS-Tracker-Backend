import { Router } from "express";
const router = Router();
import {
  getAllIntegrations,
  getIntegrationById,
  createIntegration,
  updateIntegration,
  deleteIntegration,
} from "../controllers/integrationController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

router.get("/", getAllIntegrations);
router.get("/:id", getIntegrationById);
router.post("/", createIntegration);
router.put("/:id", updateIntegration);
router.delete("/:id", deleteIntegration);

export default router;

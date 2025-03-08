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

router.get("/", authMiddleware, getAllIntegrations);
router.get("/:id", authMiddleware, getIntegrationById);
router.post("/", authMiddleware, createIntegration);
router.put("/:id", authMiddleware, updateIntegration);
router.delete("/:id", authMiddleware, deleteIntegration);

export default router;

import { Router } from "express";
const router = Router();
import {
  getAllClientExecutives,
  getClientExecutiveById,
  createClientExecutive,
  updateClientExecutive,
  deleteClientExecutive,
} from "../controllers/clientExecutiveController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

router.get("/", authMiddleware, getAllClientExecutives);
router.get("/:id", authMiddleware, getClientExecutiveById);
router.post("/", authMiddleware, createClientExecutive);
router.put("/:id", authMiddleware, updateClientExecutive);
router.delete("/:id", authMiddleware, deleteClientExecutive);

export default router;

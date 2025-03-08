import { Router } from "express";
const router = Router();
import {
  getAllOperations,
  getOperationById,
  createOperation,
  updateOperation,
  deleteOperation,
} from "../controllers/operationController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

router.get("/", authMiddleware, getAllOperations);
router.get("/:id", authMiddleware, getOperationById);
router.post("/", authMiddleware, createOperation);
router.put("/:id", authMiddleware, updateOperation);
router.delete("/:id", authMiddleware, deleteOperation);

export default router;

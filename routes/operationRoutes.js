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

router.get("/", getAllOperations);
router.get("/:id", getOperationById);
router.post("/", createOperation);
router.put("/:id", updateOperation);
router.delete("/:id", deleteOperation);

export default router;

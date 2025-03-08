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

router.get("/", getAllClientExecutives);
router.get("/:id", getClientExecutiveById);
router.post("/", createClientExecutive);
router.put("/:id", updateClientExecutive);
router.delete("/:id", deleteClientExecutive);

export default router;

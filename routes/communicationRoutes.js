import { Router } from "express";
const router = Router();
import {
  getAllCommunications,
  getCommunicationById,
  createCommunication,
  updateCommunication,
  deleteCommunication,
} from "../controllers/communicationController.js";
import authMiddleware from "../middleware/authMiddleware.js";

router.get("/", authMiddleware, getAllCommunications);
router.get("/:id", authMiddleware, getCommunicationById);
router.post("/", authMiddleware, createCommunication);
router.put("/:id", authMiddleware, updateCommunication);
router.delete("/:id", authMiddleware, deleteCommunication);

export default router;

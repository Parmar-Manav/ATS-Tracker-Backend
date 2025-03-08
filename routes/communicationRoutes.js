import { Router } from "express";
const router = Router();
import {
  getAllCommunications,
  getCommunicationById,
  createCommunication,
  updateCommunication,
  deleteCommunication,
} from "../controllers/communicationController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

router.get("/", getAllCommunications);
router.get("/:id", getCommunicationById);
router.post("/", createCommunication);
router.put("/:id", updateCommunication);
router.delete("/:id", deleteCommunication);

export default router;

import { Router } from "express";
const router = Router();
import {
  getAllClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient,
} from "../controllers/clientController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

router.get("/", authMiddleware, getAllClients);
router.get("/:id", authMiddleware, getClientById);
router.post("/", authMiddleware, createClient);
router.put("/:id", authMiddleware, updateClient);
router.delete("/:id", authMiddleware, deleteClient);

export default router;

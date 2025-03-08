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

router.get("/", getAllClients);
router.get("/:id", getClientById);
router.post("/", createClient);
router.put("/:id", updateClient);
router.delete("/:id", deleteClient);

export default router;

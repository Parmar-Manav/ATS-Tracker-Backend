import { Router } from "express";
const router = Router();
import {
  getAllNotifications,
  getNotificationById,
  createNotification,
  updateNotification,
  deleteNotification,
} from "../controllers/notificationController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

router.get("/", authMiddleware, getAllNotifications);
router.get("/:id", authMiddleware, getNotificationById);
router.post("/", authMiddleware, createNotification);
router.put("/:id", authMiddleware, updateNotification);
router.delete("/:id", authMiddleware, deleteNotification);

export default router;

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

router.get("/", getAllNotifications);
router.get("/:id", getNotificationById);
router.post("/", createNotification);
router.put("/:id", updateNotification);
router.delete("/:id", deleteNotification);

export default router;

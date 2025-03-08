import { Router } from "express";
const router = Router();
import {
  getAllCalendarEvents,
  getCalendarEventById,
  createCalendarEvent,
  updateCalendarEvent,
  deleteCalendarEvent,
} from "../controllers/calendarController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

router.get("/", authMiddleware, getAllCalendarEvents);
router.get("/:id", authMiddleware, getCalendarEventById);
router.post("/", authMiddleware, createCalendarEvent);
router.put("/:id", authMiddleware, updateCalendarEvent);
router.delete("/:id", authMiddleware, deleteCalendarEvent);

export default router;

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

router.get("/", getAllCalendarEvents);
router.get("/:id", getCalendarEventById);
router.post("/", createCalendarEvent);
router.put("/:id", updateCalendarEvent);
router.delete("/:id", deleteCalendarEvent);

export default router;

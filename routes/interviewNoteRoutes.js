import { Router } from "express";
const router = Router();
import {
  getAllInterviewNotes,
  getInterviewNoteById,
  createInterviewNote,
  updateInterviewNote,
  deleteInterviewNote,
} from "../controllers/interviewNoteController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

router.get("/", authMiddleware, getAllInterviewNotes);
router.get("/:id", authMiddleware, getInterviewNoteById);
router.post("/", authMiddleware, createInterviewNote);
router.put("/:id", authMiddleware, updateInterviewNote);
router.delete("/:id", authMiddleware, deleteInterviewNote);

export default router;

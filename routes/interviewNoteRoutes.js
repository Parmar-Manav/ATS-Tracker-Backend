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

router.get("/", getAllInterviewNotes);
router.get("/:id", getInterviewNoteById);
router.post("/", createInterviewNote);
router.put("/:id", updateInterviewNote);
router.delete("/:id", deleteInterviewNote);

export default router;

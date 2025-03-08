import { Router } from "express";
const router = Router();
import {
  getAllTags,
  getTagById,
  createTag,
  updateTag,
  deleteTag,
} from "../controllers/tagController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

router.get("/", authMiddleware, getAllTags);
router.get("/:id", authMiddleware, getTagById);
router.post("/", authMiddleware, createTag);
router.put("/:id", authMiddleware, updateTag);
router.delete("/:id", authMiddleware, deleteTag);

export default router;

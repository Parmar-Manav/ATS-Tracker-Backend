import { Router } from "express";
const router = Router();
import {
  getAllDocumentContents,
  getDocumentContentById,
  createDocumentContent,
  updateDocumentContent,
  deleteDocumentContent,
} from "../controllers/documentContentController.js";
import authMiddleware from "../middleware/authMiddleware.js";

router.get("/", authMiddleware, getAllDocumentContents);
router.get("/:id", authMiddleware, getDocumentContentById);
router.post("/", authMiddleware, createDocumentContent);
router.put("/:id", authMiddleware, updateDocumentContent);
router.delete("/:id", authMiddleware, deleteDocumentContent);

export default router;

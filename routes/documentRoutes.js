import { Router } from "express"
const router = Router()
import {
  getAllDocuments,
  getDocumentById,
  createDocument,
  updateDocument,
  deleteDocument,
} from "../controllers/documentController.js"
import authMiddleware from "../middlewares/authMiddleware.js";
import upload from "../middlewares/multermiddleware.js"

router.get("/", authMiddleware, getAllDocuments)
router.get("/:id", authMiddleware, getDocumentById)
router.post("/", authMiddleware, upload.single("file"), createDocument)
router.put("/:id", authMiddleware, upload.single("file"), updateDocument)
router.delete("/:id", authMiddleware, deleteDocument)

export default router


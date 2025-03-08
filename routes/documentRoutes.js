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

router.get("/", getAllDocuments)
router.get("/:id", getDocumentById)
router.post("/", upload.single("file"), createDocument)
router.put("/:id", upload.single("file"), updateDocument)
router.delete("/:id", deleteDocument)

export default router


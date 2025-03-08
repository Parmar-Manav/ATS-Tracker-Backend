import { Router } from "express";
const router = Router();
import {
  getAllDocumentContents,
  getDocumentContentById,
  createDocumentContent,
  updateDocumentContent,
  deleteDocumentContent,
} from "../controllers/documentContentController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

router.get("/", getAllDocumentContents);
router.get("/:id", getDocumentContentById);
router.post("/", createDocumentContent);
router.put("/:id", updateDocumentContent);
router.delete("/:id", deleteDocumentContent);

export default router;

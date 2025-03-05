import { Router } from "express";
const router = Router();
import {
  getAllEmailTemplates,
  getEmailTemplateById,
  createEmailTemplate,
  updateEmailTemplate,
  deleteEmailTemplate,
} from "../controllers/emailTemplateController.js";
import authMiddleware from "../middleware/authMiddleware.js";

router.get("/", authMiddleware, getAllEmailTemplates);
router.get("/:id", authMiddleware, getEmailTemplateById);
router.post("/", authMiddleware, createEmailTemplate);
router.put("/:id", authMiddleware, updateEmailTemplate);
router.delete("/:id", authMiddleware, deleteEmailTemplate);

export default router;

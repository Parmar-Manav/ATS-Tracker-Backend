import { Router } from "express";
const router = Router();
import {
  getAllEmailTemplates,
  getEmailTemplateById,
  createEmailTemplate,
  updateEmailTemplate,
  deleteEmailTemplate,
} from "../controllers/emailTemplateController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

router.get("/", getAllEmailTemplates);
router.get("/:id", getEmailTemplateById);
router.post("/", createEmailTemplate);
router.put("/:id", updateEmailTemplate);
router.delete("/:id", deleteEmailTemplate);

export default router;

import { Router } from "express";
const router = Router();
import {
  getAllSettings,
  getSettingById,
  createSetting,
  updateSetting,
  deleteSetting,
} from "../controllers/settingController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

router.get("/", authMiddleware, getAllSettings);
router.get("/:id", authMiddleware, getSettingById);
router.post("/", authMiddleware, createSetting);
router.put("/:id", authMiddleware, updateSetting);
router.delete("/:id", authMiddleware, deleteSetting);

export default router;

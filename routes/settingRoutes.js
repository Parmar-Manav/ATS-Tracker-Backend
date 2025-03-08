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

router.get("/", getAllSettings);
router.get("/:id", getSettingById);
router.post("/", createSetting);
router.put("/:id", updateSetting);
router.delete("/:id", deleteSetting);

export default router;

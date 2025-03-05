import { Router } from "express";
const router = Router();
import {
  getAllScoreDetails,
  getScoreDetailById,
  createScoreDetail,
  updateScoreDetail,
  deleteScoreDetail,
} from "../controllers/scoreDetailController.js";
import authMiddleware from "../middleware/authMiddleware.js";

router.get("/", authMiddleware, getAllScoreDetails);
router.get("/:id", authMiddleware, getScoreDetailById);
router.post("/", authMiddleware, createScoreDetail);
router.put("/:id", authMiddleware, updateScoreDetail);
router.delete("/:id", authMiddleware, deleteScoreDetail);

export default router;

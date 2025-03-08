import { Router } from "express";
const router = Router();
import {
  getAllScoreDetails,
  getScoreDetailById,
  createScoreDetail,
  updateScoreDetail,
  deleteScoreDetail,
} from "../controllers/scoreDetailController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

router.get("/", getAllScoreDetails);
router.get("/:id", getScoreDetailById);
router.post("/", createScoreDetail);
router.put("/:id", updateScoreDetail);
router.delete("/:id", deleteScoreDetail);

export default router;

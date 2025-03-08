import { Router } from "express";
const router = Router();
import {
  getAllReferrals,
  getReferralById,
  createReferral,
  updateReferral,
  deleteReferral,
} from "../controllers/referralController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

router.get("/", authMiddleware, getAllReferrals);
router.get("/:id", authMiddleware, getReferralById);
router.post("/", authMiddleware, createReferral);
router.put("/:id", authMiddleware, updateReferral);
router.delete("/:id", authMiddleware, deleteReferral);

export default router;

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

router.get("/", getAllReferrals);
router.get("/:id", getReferralById);
router.post("/", createReferral);
router.put("/:id", updateReferral);
router.delete("/:id", deleteReferral);

export default router;

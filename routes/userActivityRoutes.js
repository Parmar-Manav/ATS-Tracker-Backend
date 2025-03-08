import { Router } from "express";
const router = Router();
import {
  getAllUserActivities,
  getUserActivityById,
  createUserActivity,
  updateUserActivity,
  deleteUserActivity,
} from "../controllers/userActivityController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

router.get("/", authMiddleware, getAllUserActivities);
router.get("/:id", authMiddleware, getUserActivityById);
router.post("/", authMiddleware, createUserActivity);
router.put("/:id", authMiddleware, updateUserActivity);
router.delete("/:id", authMiddleware, deleteUserActivity);

export default router;

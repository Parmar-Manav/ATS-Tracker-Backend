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

router.get("/", getAllUserActivities);
router.get("/:id", getUserActivityById);
router.post("/", createUserActivity);
router.put("/:id", updateUserActivity);
router.delete("/:id", deleteUserActivity);

export default router;

import express from "express";
import {
  currentUser,
  loginUser,
  registerUser,
} from "../controllers/userController.js";
import { validateToken } from "../middleware/validateTokenHandler.js";

export const userRouter = express.Router();

userRouter.route("/Current").get(validateToken, currentUser);
userRouter.route("/Register").post(registerUser);
userRouter.route("/Login").post(loginUser);

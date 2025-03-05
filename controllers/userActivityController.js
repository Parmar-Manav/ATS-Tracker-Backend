import { UserActivity } from "../models/index.js";

export const getAllUserActivities = async (req, res) => {
  try {
    const userActivities = await UserActivity.findAll();
    res.status(200).json(userActivities);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error retrieving user activities",
        error: error.message,
      });
  }
};

export const getUserActivityById = async (req, res) => {
  try {
    const userActivity = await UserActivity.findByPk(req.params.id);
    if (userActivity) {
      res.status(200).json(userActivity);
    } else {
      res.status(404).json({ message: "User activity not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error retrieving user activity",
        error: error.message,
      });
  }
};

export const createUserActivity = async (req, res) => {
  try {
    const newUserActivity = await UserActivity.create(req.body);
    res.status(201).json(newUserActivity);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating user activity", error: error.message });
  }
};

export const updateUserActivity = async (req, res) => {
  try {
    const updated = await UserActivity.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated[0] === 1) {
      res.status(200).json({ message: "User activity updated successfully" });
    } else {
      res.status(404).json({ message: "User activity not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating user activity", error: error.message });
  }
};

export const deleteUserActivity = async (req, res) => {
  try {
    const deleted = await UserActivity.destroy({
      where: { id: req.params.id },
    });
    if (deleted === 1) {
      res.status(200).json({ message: "User activity deleted successfully" });
    } else {
      res.status(404).json({ message: "User activity not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting user activity", error: error.message });
  }
};

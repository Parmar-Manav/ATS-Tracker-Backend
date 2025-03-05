import { OnboardingTask } from "../models/index.js";
export const getAllOnboardingTasks = async (req, res) => {
  try {
    const onboardingTasks = await OnboardingTask.findAll();
    res.status(200).json(onboardingTasks);
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving onboarding tasks",
      error: error.message,
    });
  }
};

export const getOnboardingTaskById = async (req, res) => {
  try {
    const onboardingTask = await OnboardingTask.findByPk(req.params.id);
    if (onboardingTask) {
      res.status(200).json(onboardingTask);
    } else {
      res.status(404).json({ message: "Onboarding task not found" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving onboarding task",
      error: error.message,
    });
  }
};

export const createOnboardingTask = async (req, res) => {
  try {
    const newOnboardingTask = await OnboardingTask.create(req.body);
    res.status(201).json(newOnboardingTask);
  } catch (error) {
    res.status(500).json({
      message: "Error creating onboarding task",
      error: error.message,
    });
  }
};

export const updateOnboardingTask = async (req, res) => {
  try {
    const updated = await OnboardingTask.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated[0] === 1) {
      res.status(200).json({ message: "Onboarding task updated successfully" });
    } else {
      res.status(404).json({ message: "Onboarding task not found" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error updating onboarding task",
      error: error.message,
    });
  }
};

export const deleteOnboardingTask = async (req, res) => {
  try {
    const deleted = await OnboardingTask.destroy({
      where: { id: req.params.id },
    });
    if (deleted === 1) {
      res.status(200).json({ message: "Onboarding task deleted successfully" });
    } else {
      res.status(404).json({ message: "Onboarding task not found" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error deleting onboarding task",
      error: error.message,
    });
  }
};

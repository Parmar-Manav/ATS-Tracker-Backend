import { OnboardingProgress } from "../models/index.js";

export const getAllOnboardingProgresses = async (req, res) => {
  try {
    const onboardingProgresses = await OnboardingProgress.findAll();
    res.status(200).json(onboardingProgresses);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error retrieving onboarding progresses",
        error: error.message,
      });
  }
};

export const getOnboardingProgressById = async (req, res) => {
  try {
    const onboardingProgress = await OnboardingProgress.findByPk(req.params.id);
    if (onboardingProgress) {
      res.status(200).json(onboardingProgress);
    } else {
      res.status(404).json({ message: "Onboarding progress not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error retrieving onboarding progress",
        error: error.message,
      });
  }
};

export const createOnboardingProgress = async (req, res) => {
  try {
    const newOnboardingProgress = await OnboardingProgress.create(req.body);
    res.status(201).json(newOnboardingProgress);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error creating onboarding progress",
        error: error.message,
      });
  }
};

export const updateOnboardingProgress = async (req, res) => {
  try {
    const updated = await OnboardingProgress.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated[0] === 1) {
      res
        .status(200)
        .json({ message: "Onboarding progress updated successfully" });
    } else {
      res.status(404).json({ message: "Onboarding progress not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error updating onboarding progress",
        error: error.message,
      });
  }
};

export const deleteOnboardingProgress = async (req, res) => {
  try {
    const deleted = await OnboardingProgress.destroy({
      where: { id: req.params.id },
    });
    if (deleted === 1) {
      res
        .status(200)
        .json({ message: "Onboarding progress deleted successfully" });
    } else {
      res.status(404).json({ message: "Onboarding progress not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error deleting onboarding progress",
        error: error.message,
      });
  }
};

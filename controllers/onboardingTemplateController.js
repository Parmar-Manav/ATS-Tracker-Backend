import { OnboardingTemplate } from "../models/index.js";
export const getAllOnboardingTemplates = async (req, res) => {
  try {
    const onboardingTemplates = await OnboardingTemplate.findAll();
    res.status(200).json(onboardingTemplates);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error retrieving onboarding templates",
        error: error.message,
      });
  }
};

export const getOnboardingTemplateById = async (req, res) => {
  try {
    const onboardingTemplate = await OnboardingTemplate.findByPk(req.params.id);
    if (onboardingTemplate) {
      res.status(200).json(onboardingTemplate);
    } else {
      res.status(404).json({ message: "Onboarding template not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error retrieving onboarding template",
        error: error.message,
      });
  }
};

export const createOnboardingTemplate = async (req, res) => {
  try {
    const newOnboardingTemplate = await OnboardingTemplate.create(req.body);
    res.status(201).json(newOnboardingTemplate);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error creating onboarding template",
        error: error.message,
      });
  }
};

export const updateOnboardingTemplate = async (req, res) => {
  try {
    const updated = await OnboardingTemplate.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated[0] === 1) {
      res
        .status(200)
        .json({ message: "Onboarding template updated successfully" });
    } else {
      res.status(404).json({ message: "Onboarding template not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error updating onboarding template",
        error: error.message,
      });
  }
};

export const deleteOnboardingTemplate = async (req, res) => {
  try {
    const deleted = await OnboardingTemplate.destroy({
      where: { id: req.params.id },
    });
    if (deleted === 1) {
      res
        .status(200)
        .json({ message: "Onboarding template deleted successfully" });
    } else {
      res.status(404).json({ message: "Onboarding template not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error deleting onboarding template",
        error: error.message,
      });
  }
};

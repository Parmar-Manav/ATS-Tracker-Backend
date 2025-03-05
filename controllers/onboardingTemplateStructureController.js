import { OnboardingTemplateStructure } from "../models/index.js";

export const getAllOnboardingTemplateStructures = async (req, res) => {
  try {
    const onboardingTemplateStructures =
      await OnboardingTemplateStructure.findAll();
    res.status(200).json(onboardingTemplateStructures);
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving onboarding template structures",
      error: error.message,
    });
  }
};

export const getOnboardingTemplateStructureById = async (req, res) => {
  try {
    const onboardingTemplateStructure =
      await OnboardingTemplateStructure.findByPk(req.params.id);
    if (onboardingTemplateStructure) {
      res.status(200).json(onboardingTemplateStructure);
    } else {
      res
        .status(404)
        .json({ message: "Onboarding template structure not found" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving onboarding template structure",
      error: error.message,
    });
  }
};

export const createOnboardingTemplateStructure = async (req, res) => {
  try {
    const newOnboardingTemplateStructure =
      await OnboardingTemplateStructure.create(req.body);
    res.status(201).json(newOnboardingTemplateStructure);
  } catch (error) {
    res.status(500).json({
      message: "Error creating onboarding template structure",
      error: error.message,
    });
  }
};

export const updateOnboardingTemplateStructure = async (req, res) => {
  try {
    const updated = await OnboardingTemplateStructure.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated[0] === 1) {
      res.status(200).json({
        message: "Onboarding template structure updated successfully",
      });
    } else {
      res
        .status(404)
        .json({ message: "Onboarding template structure not found" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error updating onboarding template structure",
      error: error.message,
    });
  }
};

export const deleteOnboardingTemplateStructure = async (req, res) => {
  try {
    const deleted = await OnboardingTemplateStructure.destroy({
      where: { id: req.params.id },
    });
    if (deleted === 1) {
      res.status(200).json({
        message: "Onboarding template structure deleted successfully",
      });
    } else {
      res
        .status(404)
        .json({ message: "Onboarding template structure not found" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error deleting onboarding template structure",
      error: error.message,
    });
  }
};

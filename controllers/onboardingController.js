import { Onboarding } from "../models/index.js";

export const getAllOnboardings = async (req, res) => {
  try {
    const onboardings = await Onboarding.findAll();
    res.status(200).json(onboardings);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving onboardings", error: error.message });
  }
};

export const getOnboardingById = async (req, res) => {
  try {
    const onboarding = await Onboarding.findByPk(req.params.id);
    if (onboarding) {
      res.status(200).json(onboarding);
    } else {
      res.status(404).json({ message: "Onboarding not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving onboarding", error: error.message });
  }
};

export const createOnboarding = async (req, res) => {
  try {
    const newOnboarding = await Onboarding.create(req.body);
    res.status(201).json(newOnboarding);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating onboarding", error: error.message });
  }
};

export const updateOnboarding = async (req, res) => {
  try {
    const updated = await Onboarding.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated[0] === 1) {
      res.status(200).json({ message: "Onboarding updated successfully" });
    } else {
      res.status(404).json({ message: "Onboarding not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating onboarding", error: error.message });
  }
};

export const deleteOnboarding = async (req, res) => {
  try {
    const deleted = await Onboarding.destroy({
      where: { id: req.params.id },
    });
    if (deleted === 1) {
      res.status(200).json({ message: "Onboarding deleted successfully" });
    } else {
      res.status(404).json({ message: "Onboarding not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting onboarding", error: error.message });
  }
};

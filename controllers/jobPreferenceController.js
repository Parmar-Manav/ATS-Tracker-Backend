import { JobPreference } from "../models/index.js";

export const getAllJobPreferences = async (req, res) => {
  try {
    const jobPreferences = await JobPreference.findAll();
    res.status(200).json(jobPreferences);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error retrieving job preferences",
        error: error.message,
      });
  }
};

export const getJobPreferenceById = async (req, res) => {
  try {
    const jobPreference = await JobPreference.findByPk(req.params.id);
    if (jobPreference) {
      res.status(200).json(jobPreference);
    } else {
      res.status(404).json({ message: "Job preference not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error retrieving job preference",
        error: error.message,
      });
  }
};

export const createJobPreference = async (req, res) => {
  try {
    const newJobPreference = await JobPreference.create(req.body);
    res.status(201).json(newJobPreference);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating job preference", error: error.message });
  }
};

export const updateJobPreference = async (req, res) => {
  try {
    const updated = await JobPreference.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated[0] === 1) {
      res.status(200).json({ message: "Job preference updated successfully" });
    } else {
      res.status(404).json({ message: "Job preference not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating job preference", error: error.message });
  }
};

export const deleteJobPreference = async (req, res) => {
  try {
    const deleted = await JobPreference.destroy({
      where: { id: req.params.id },
    });
    if (deleted === 1) {
      res.status(200).json({ message: "Job preference deleted successfully" });
    } else {
      res.status(404).json({ message: "Job preference not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting job preference", error: error.message });
  }
};

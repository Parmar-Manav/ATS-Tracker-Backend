import { ApplicantTag } from "../models/index.js";

export const getAllApplicantTags = async (req, res) => {
  try {
    const applicantTags = await ApplicantTag.findAll();
    res.status(200).json(applicantTags);
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving applicant tags",
      error: error.message,
    });
  }
};

export const getApplicantTagById = async (req, res) => {
  try {
    const applicantTag = await ApplicantTag.findByPk(req.params.id);
    if (applicantTag) {
      res.status(200).json(applicantTag);
    } else {
      res.status(404).json({ message: "Applicant tag not found" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving applicant tag",
      error: error.message,
    });
  }
};

export const createApplicantTag = async (req, res) => {
  try {
    const newApplicantTag = await ApplicantTag.create(req.body);
    res.status(201).json(newApplicantTag);
  } catch (error) {
    res.status(500).json({
      message: "Error creating applicant tag",
      error: error.message,
    });
  }
};

export const updateApplicantTag = async (req, res) => {
  try {
    const [updated] = await ApplicantTag.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated === 1) {
      res.status(200).json({ message: "Applicant tag updated successfully" });
    } else {
      res.status(404).json({ message: "Applicant tag not found" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error updating applicant tag",
      error: error.message,
    });
  }
};

export const deleteApplicantTag = async (req, res) => {
  try {
    const deleted = await ApplicantTag.destroy({
      where: { id: req.params.id },
    });
    if (deleted === 1) {
      res.status(200).json({ message: "Applicant tag deleted successfully" });
    } else {
      res.status(404).json({ message: "Applicant tag not found" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error deleting applicant tag",
      error: error.message,
    });
  }
};

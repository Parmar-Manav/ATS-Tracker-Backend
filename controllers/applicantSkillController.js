import { ApplicantSkill } from "../models/index.js";

export const getAllApplicantSkills = async (req, res) => {
  try {
    const applicantSkills = await ApplicantSkill.findAll();
    res.status(200).json(applicantSkills);
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving applicant skills",
      error: error.message,
    });
  }
};

export const getApplicantSkillById = async (req, res) => {
  try {
    const applicantSkill = await ApplicantSkill.findByPk(req.params.id);
    if (applicantSkill) {
      res.status(200).json(applicantSkill);
    } else {
      res.status(404).json({ message: "Applicant skill not found" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving applicant skill",
      error: error.message,
    });
  }
};

export const createApplicantSkill = async (req, res) => {
  try {
    const newApplicantSkill = await ApplicantSkill.create(req.body);
    res.status(201).json(newApplicantSkill);
  } catch (error) {
    res.status(500).json({
      message: "Error creating applicant skill",
      error: error.message,
    });
  }
};

export const updateApplicantSkill = async (req, res) => {
  try {
    const updated = await ApplicantSkill.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated[0] === 1) {
      res.status(200).json({ message: "Applicant skill updated successfully" });
    } else {
      res.status(404).json({ message: "Applicant skill not found" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error updating applicant skill",
      error: error.message,
    });
  }
};

export const deleteApplicantSkill = async (req, res) => {
  try {
    const deleted = await ApplicantSkill.destroy({
      where: { id: req.params.id },
    });
    if (deleted === 1) {
      res.status(200).json({ message: "Applicant skill deleted successfully" });
    } else {
      res.status(404).json({ message: "Applicant skill not found" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error deleting applicant skill",
      error: error.message,
    });
  }
};

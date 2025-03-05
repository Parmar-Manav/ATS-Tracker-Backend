import { ResumeSection } from "../models/index.js";

export const getAllResumeSections = async (req, res) => {
  try {
    const resumeSections = await ResumeSection.findAll();
    res.status(200).json(resumeSections);
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving resume sections",
      error: error.message,
    });
  }
};

export const getResumeSectionById = async (req, res) => {
  try {
    const resumeSection = await ResumeSection.findByPk(req.params.id);
    if (resumeSection) {
      res.status(200).json(resumeSection);
    } else {
      res.status(404).json({ message: "Resume section not found" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving resume section",
      error: error.message,
    });
  }
};

export const createResumeSection = async (req, res) => {
  try {
    const newResumeSection = await ResumeSection.create(req.body);
    res.status(201).json(newResumeSection);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating resume section", error: error.message });
  }
};

export const updateResumeSection = async (req, res) => {
  try {
    const [updated] = await ResumeSection.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated === 1) {
      res.status(200).json({ message: "Resume section updated successfully" });
    } else {
      res.status(404).json({ message: "Resume section not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating resume section", error: error.message });
  }
};

export const deleteResumeSection = async (req, res) => {
  try {
    const deleted = await ResumeSection.destroy({
      where: { id: req.params.id },
    });
    if (deleted === 1) {
      res.status(200).json({ message: "Resume section deleted successfully" });
    } else {
      res.status(404).json({ message: "Resume section not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting resume section", error: error.message });
  }
};

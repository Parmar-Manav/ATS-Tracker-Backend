import { JobSkill } from "../models/index.js";

export const getAllJobSkills = async (req, res) => {
  try {
    const jobSkills = await JobSkill.findAll();
    res.status(200).json(jobSkills);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving job skills", error: error.message });
  }
};

export const getJobSkillById = async (req, res) => {
  try {
    const jobSkill = await JobSkill.findByPk(req.params.id);
    if (jobSkill) {
      res.status(200).json(jobSkill);
    } else {
      res.status(404).json({ message: "Job skill not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving job skill", error: error.message });
  }
};

export const createJobSkill = async (req, res) => {
  try {
    const newJobSkill = await JobSkill.create(req.body);
    res.status(201).json(newJobSkill);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating job skill", error: error.message });
  }
};

export const updateJobSkill = async (req, res) => {
  try {
    const updated = await JobSkill.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated[0] === 1) {
      res.status(200).json({ message: "Job skill updated successfully" });
    } else {
      res.status(404).json({ message: "Job skill not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating job skill", error: error.message });
  }
};

export const deleteJobSkill = async (req, res) => {
  try {
    const deleted = await JobSkill.destroy({
      where: { id: req.params.id },
    });
    if (deleted === 1) {
      res.status(200).json({ message: "Job skill deleted successfully" });
    } else {
      res.status(404).json({ message: "Job skill not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting job skill", error: error.message });
  }
};

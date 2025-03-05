import { Skill } from "../models/index.js";

export const getAllSkills = async (req, res) => {
  try {
    const skills = await Skill.findAll();
    res.status(200).json(skills);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving skills", error: error.message });
  }
};

export const getSkillById = async (req, res) => {
  try {
    const skill = await Skill.findByPk(req.params.id);
    if (skill) {
      res.status(200).json(skill);
    } else {
      res.status(404).json({ message: "Skill not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving skill", error: error.message });
  }
};

export const createSkill = async (req, res) => {
  try {
    const newSkill = await Skill.create(req.body);
    res.status(201).json(newSkill);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating skill", error: error.message });
  }
};

export const updateSkill = async (req, res) => {
  try {
    const [updated] = await Skill.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated === 1) {
      res.status(200).json({ message: "Skill updated successfully" });
    } else {
      res.status(404).json({ message: "Skill not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating skill", error: error.message });
  }
};

export const deleteSkill = async (req, res) => {
  try {
    const deleted = await Skill.destroy({
      where: { id: req.params.id },
    });
    if (deleted === 1) {
      res.status(200).json({ message: "Skill deleted successfully" });
    } else {
      res.status(404).json({ message: "Skill not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting skill", error: error.message });
  }
};

import { TeamMember } from "../models/index.js";

export const getAllTeamMembers = async (req, res) => {
  try {
    const teamMembers = await TeamMember.findAll();
    res.status(200).json(teamMembers);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving team members", error: error.message });
  }
};

export const getTeamMemberById = async (req, res) => {
  try {
    const teamMember = await TeamMember.findByPk(req.params.id);
    if (teamMember) {
      res.status(200).json(teamMember);
    } else {
      res.status(404).json({ message: "Team member not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving team member", error: error.message });
  }
};

export const createTeamMember = async (req, res) => {
  try {
    const newTeamMember = await TeamMember.create(req.body);
    res.status(201).json(newTeamMember);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating team member", error: error.message });
  }
};

export const updateTeamMember = async (req, res) => {
  try {
    const [updated] = await TeamMember.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated === 1) {
      res.status(200).json({ message: "Team member updated successfully" });
    } else {
      res.status(404).json({ message: "Team member not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating team member", error: error.message });
  }
};

export const deleteTeamMember = async (req, res) => {
  try {
    const deleted = await TeamMember.destroy({
      where: { id: req.params.id },
    });
    if (deleted === 1) {
      res.status(200).json({ message: "Team member deleted successfully" });
    } else {
      res.status(404).json({ message: "Team member not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting team member", error: error.message });
  }
};

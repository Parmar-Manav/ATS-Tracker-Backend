import { TeamMemberPermission } from "../models/index.js";

export const getAllTeamMemberPermissions = async (req, res) => {
  try {
    const teamMemberPermissions = await TeamMemberPermission.findAll();
    res.status(200).json(teamMemberPermissions);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error retrieving team member permissions",
        error: error.message,
      });
  }
};

export const getTeamMemberPermissionById = async (req, res) => {
  try {
    const teamMemberPermission = await TeamMemberPermission.findByPk(
      req.params.id
    );
    if (teamMemberPermission) {
      res.status(200).json(teamMemberPermission);
    } else {
      res.status(404).json({ message: "Team member permission not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error retrieving team member permission",
        error: error.message,
      });
  }
};

export const createTeamMemberPermission = async (req, res) => {
  try {
    const newTeamMemberPermission = await TeamMemberPermission.create(req.body);
    res.status(201).json(newTeamMemberPermission);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error creating team member permission",
        error: error.message,
      });
  }
};

export const updateTeamMemberPermission = async (req, res) => {
  try {
    const updated = await TeamMemberPermission.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated[0] === 1) {
      res
        .status(200)
        .json({ message: "Team member permission updated successfully" });
    } else {
      res.status(404).json({ message: "Team member permission not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error updating team member permission",
        error: error.message,
      });
  }
};

export const deleteTeamMemberPermission = async (req, res) => {
  try {
    const deleted = await TeamMemberPermission.destroy({
      where: { id: req.params.id },
    });
    if (deleted === 1) {
      res
        .status(200)
        .json({ message: "Team member permission deleted successfully" });
    } else {
      res.status(404).json({ message: "Team member permission not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error deleting team member permission",
        error: error.message,
      });
  }
};

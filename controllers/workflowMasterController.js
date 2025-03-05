import { WorkflowMaster } from "../models/index.js";

export const getAllWorkflowMasters = async (req, res) => {
  try {
    const workflowMasters = await WorkflowMaster.findAll();
    res.status(200).json(workflowMasters);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error retrieving workflow masters",
        error: error.message,
      });
  }
};

export const getWorkflowMasterById = async (req, res) => {
  try {
    const workflowMaster = await WorkflowMaster.findByPk(req.params.id);
    if (workflowMaster) {
      res.status(200).json(workflowMaster);
    } else {
      res.status(404).json({ message: "Workflow master not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error retrieving workflow master",
        error: error.message,
      });
  }
};

export const createWorkflowMaster = async (req, res) => {
  try {
    const newWorkflowMaster = await WorkflowMaster.create(req.body);
    res.status(201).json(newWorkflowMaster);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error creating workflow master",
        error: error.message,
      });
  }
};

export const updateWorkflowMaster = async (req, res) => {
  try {
    const [updated] = await WorkflowMaster.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated === 1) {
      res.status(200).json({ message: "Workflow master updated successfully" });
    } else {
      res.status(404).json({ message: "Workflow master not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error updating workflow master",
        error: error.message,
      });
  }
};

export const deleteWorkflowMaster = async (req, res) => {
  try {
    const deleted = await WorkflowMaster.destroy({
      where: { id: req.params.id },
    });
    if (deleted === 1) {
      res.status(200).json({ message: "Workflow master deleted successfully" });
    } else {
      res.status(404).json({ message: "Workflow master not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error deleting workflow master",
        error: error.message,
      });
  }
};

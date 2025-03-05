import { WorkflowAutomation } from "../models/index.js";

export const getAllWorkflowAutomations = async (req, res) => {
  try {
    const workflowAutomations = await WorkflowAutomation.findAll();
    res.status(200).json(workflowAutomations);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error retrieving workflow automations",
        error: error.message,
      });
  }
};

export const getWorkflowAutomationById = async (req, res) => {
  try {
    const workflowAutomation = await WorkflowAutomation.findByPk(req.params.id);
    if (workflowAutomation) {
      res.status(200).json(workflowAutomation);
    } else {
      res.status(404).json({ message: "Workflow automation not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error retrieving workflow automation",
        error: error.message,
      });
  }
};

export const createWorkflowAutomation = async (req, res) => {
  try {
    const newWorkflowAutomation = await WorkflowAutomation.create(req.body);
    res.status(201).json(newWorkflowAutomation);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error creating workflow automation",
        error: error.message,
      });
  }
};

export const updateWorkflowAutomation = async (req, res) => {
  try {
    const updated = await WorkflowAutomation.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated[0] === 1) {
      res
        .status(200)
        .json({ message: "Workflow automation updated successfully" });
    } else {
      res.status(404).json({ message: "Workflow automation not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error updating workflow automation",
        error: error.message,
      });
  }
};

export const deleteWorkflowAutomation = async (req, res) => {
  try {
    const deleted = await WorkflowAutomation.destroy({
      where: { id: req.params.id },
    });
    if (deleted === 1) {
      res
        .status(200)
        .json({ message: "Workflow automation deleted successfully" });
    } else {
      res.status(404).json({ message: "Workflow automation not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error deleting workflow automation",
        error: error.message,
      });
  }
};

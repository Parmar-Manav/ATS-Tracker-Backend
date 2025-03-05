import { Workflow } from "../models/index.js";

export const getAllWorkflows = async (req, res) => {
  try {
    const workflows = await Workflow.findAll();
    res.status(200).json(workflows);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving workflows", error: error.message });
  }
};

export const getWorkflowById = async (req, res) => {
  try {
    const workflow = await Workflow.findByPk(req.params.id);
    if (workflow) {
      res.status(200).json(workflow);
    } else {
      res.status(404).json({ message: "Workflow not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving workflow", error: error.message });
  }
};

export const createWorkflow = async (req, res) => {
  try {
    const newWorkflow = await Workflow.create(req.body);
    res.status(201).json(newWorkflow);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating workflow", error: error.message });
  }
};

export const updateWorkflow = async (req, res) => {
  try {
    const [updated] = await Workflow.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated === 1) {
      res.status(200).json({ message: "Workflow updated successfully" });
    } else {
      res.status(404).json({ message: "Workflow not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating workflow", error: error.message });
  }
};

export const deleteWorkflow = async (req, res) => {
  try {
    const deleted = await Workflow.destroy({
      where: { id: req.params.id },
    });
    if (deleted === 1) {
      res.status(200).json({ message: "Workflow deleted successfully" });
    } else {
      res.status(404).json({ message: "Workflow not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting workflow", error: error.message });
  }
};

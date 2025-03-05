import { OperationLog } from "../models/index.js";

export const getAllOperationLogs = async (req, res) => {
  try {
    const operationLogs = await OperationLog.findAll();
    res.status(200).json(operationLogs);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error retrieving operation logs",
        error: error.message,
      });
  }
};

export const getOperationLogById = async (req, res) => {
  try {
    const operationLog = await OperationLog.findByPk(req.params.id);
    if (operationLog) {
      res.status(200).json(operationLog);
    } else {
      res.status(404).json({ message: "Operation log not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error retrieving operation log",
        error: error.message,
      });
  }
};

export const createOperationLog = async (req, res) => {
  try {
    const newOperationLog = await OperationLog.create(req.body);
    res.status(201).json(newOperationLog);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating operation log", error: error.message });
  }
};

export const updateOperationLog = async (req, res) => {
  try {
    const updated = await OperationLog.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated[0] === 1) {
      res.status(200).json({ message: "Operation log updated successfully" });
    } else {
      res.status(404).json({ message: "Operation log not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating operation log", error: error.message });
  }
};

export const deleteOperationLog = async (req, res) => {
  try {
    const deleted = await OperationLog.destroy({
      where: { id: req.params.id },
    });
    if (deleted === 1) {
      res.status(200).json({ message: "Operation log deleted successfully" });
    } else {
      res.status(404).json({ message: "Operation log not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting operation log", error: error.message });
  }
};

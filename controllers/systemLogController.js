import { SystemLog } from "../models/index.js";

export const getAllSystemLogs = async (req, res) => {
  try {
    const systemLogs = await SystemLog.findAll();
    res.status(200).json(systemLogs);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving system logs", error: error.message });
  }
};

export const getSystemLogById = async (req, res) => {
  try {
    const systemLog = await SystemLog.findByPk(req.params.id);
    if (systemLog) {
      res.status(200).json(systemLog);
    } else {
      res.status(404).json({ message: "System log not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving system log", error: error.message });
  }
};

export const createSystemLog = async (req, res) => {
  try {
    const newSystemLog = await SystemLog.create(req.body);
    res.status(201).json(newSystemLog);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating system log", error: error.message });
  }
};

export const updateSystemLog = async (req, res) => {
  try {
    const updated = await SystemLog.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated[0] === 1) {
      res.status(200).json({ message: "System log updated successfully" });
    } else {
      res.status(404).json({ message: "System log not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating system log", error: error.message });
  }
};

export const deleteSystemLog = async (req, res) => {
  try {
    const deleted = await SystemLog.destroy({
      where: { id: req.params.id },
    });
    if (deleted === 1) {
      res.status(200).json({ message: "System log deleted successfully" });
    } else {
      res.status(404).json({ message: "System log not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting system log", error: error.message });
  }
};

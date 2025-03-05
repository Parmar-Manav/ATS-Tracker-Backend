import { ApplicationStageHistory } from "../models/index.js";

export const getAllApplicationStageHistories = async (req, res) => {
  try {
    const applicationStageHistories = await ApplicationStageHistory.findAll();
    res.status(200).json(applicationStageHistories);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error retrieving application stage histories",
        error: error.message,
      });
  }
};

export const getApplicationStageHistoryById = async (req, res) => {
  try {
    const applicationStageHistory = await ApplicationStageHistory.findByPk(
      req.params.id
    );
    if (applicationStageHistory) {
      res.status(200).json(applicationStageHistory);
    } else {
      res.status(404).json({ message: "Application stage history not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error retrieving application stage history",
        error: error.message,
      });
  }
};

export const createApplicationStageHistory = async (req, res) => {
  try {
    const newApplicationStageHistory = await ApplicationStageHistory.create(
      req.body
    );
    res.status(201).json(newApplicationStageHistory);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error creating application stage history",
        error: error.message,
      });
  }
};

export const updateApplicationStageHistory = async (req, res) => {
  try {
    const updated = await ApplicationStageHistory.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated[0] === 1) {
      res
        .status(200)
        .json({ message: "Application stage history updated successfully" });
    } else {
      res.status(404).json({ message: "Application stage history not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error updating application stage history",
        error: error.message,
      });
  }
};

export const deleteApplicationStageHistory = async (req, res) => {
  try {
    const deleted = await ApplicationStageHistory.destroy({
      where: { id: req.params.id },
    });
    if (deleted === 1) {
      res
        .status(200)
        .json({ message: "Application stage history deleted successfully" });
    } else {
      res.status(404).json({ message: "Application stage history not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error deleting application stage history",
        error: error.message,
      });
  }
};

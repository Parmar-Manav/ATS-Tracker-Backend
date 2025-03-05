import { Analytics } from "../models/index.js";

export const getAllAnalytics = async (req, res) => {
  try {
    const analytics = await Analytics.findAll();
    res.status(200).json(analytics);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving analytics", error: error.message });
  }
};

export const getAnalyticsById = async (req, res) => {
  try {
    const analytics = await Analytics.findByPk(req.params.id);
    if (analytics) {
      res.status(200).json(analytics);
    } else {
      res.status(404).json({ message: "Analytics not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving analytics", error: error.message });
  }
};

export const createAnalytics = async (req, res) => {
  try {
    const newAnalytics = await Analytics.create(req.body);
    res.status(201).json(newAnalytics);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating analytics", error: error.message });
  }
};

export const updateAnalytics = async (req, res) => {
  try {
    const updated = await Analytics.update(req.body, {
      where: { id : req.params.id },
    });
    if (updated[0] === 1) {
      res.status(200).json({ message: "Analytics updated successfully" });
    } else {
      res.status(404).json({ message: "Analytics not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating analytics", error: error.message });
  }
};

export const deleteAnalytics = async (req, res) => {
  try {
    const deleted = await Analytics.destroy({
      where: { id: req.params.id },
    });
    if (deleted === 1) {
      res.status(200).json({ message: "Analytics deleted successfully" });
    } else {
      res.status(404).json({ message: "Analytics not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting analytics", error: error.message });
  }
};

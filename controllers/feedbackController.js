import { Feedback } from "../models/index.js";

// Get all feedback
export const getAllFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.findAll();
    res.status(200).json(feedback);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving feedback", error: error.message });
  }
};

// Get a single feedback by ID
export const getFeedbackById = async (req, res) => {
  try {
    const feedback = await Feedback.findByPk(req.params.id);
    if (feedback) {
      res.status(200).json(feedback);
    } else {
      res.status(404).json({ message: "Feedback not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving feedback", error: error.message });
  }
};

// Create a new feedback
export const createFeedback = async (req, res) => {
  try {
    const newFeedback = await Feedback.create(req.body);
    res.status(201).json(newFeedback);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating feedback", error: error.message });
  }
};

// Update a feedback
export const updateFeedback = async (req, res) => {
  try {
    const updated = await Feedback.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated[0] === 1) {
      res.status(200).json({ message: "Feedback updated successfully" });
    } else {
      res.status(404).json({ message: "Feedback not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating feedback", error: error.message });
  }
};

// Delete a feedback
export const deleteFeedback = async (req, res) => {
  try {
    const deleted = await Feedback.destroy({
      where: { id: req.params.id },
    });
    if (deleted === 1) {
      res.status(200).json({ message: "Feedback deleted successfully" });
    } else {
      res.status(404).json({ message: "Feedback not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting feedback", error: error.message });
  }
};

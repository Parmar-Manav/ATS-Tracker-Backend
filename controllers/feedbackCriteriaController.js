import { FeedbackCriteria } from "../models/index.js";
export const getAllFeedbackCriteria = async (req, res) => {
  try {
    const feedbackCriteria = await FeedbackCriteria.findAll();
    res.status(200).json(feedbackCriteria);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error retrieving feedback criteria",
        error: error.message,
      });
  }
};

export const getFeedbackCriteriaById = async (req, res) => {
  try {
    const feedbackCriteria = await FeedbackCriteria.findByPk(req.params.id);
    if (feedbackCriteria) {
      res.status(200).json(feedbackCriteria);
    } else {
      res.status(404).json({ message: "Feedback Criteria not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error retrieving feedback Criteria",
        error: error.message,
      });
  }
};

export const createFeedbackCriteria = async (req, res) => {
  try {
    const newFeedbackCriteria = await FeedbackCriteria.create(req.body);
    res.status(201).json(newFeedbackCriteria);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error creating feedback Criteria",
        error: error.message,
      });
  }
};

export const updateFeedbackCriteria = async (req, res) => {
  try {
    const updated = await FeedbackCriteria.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated[0] === 1) {
      res
        .status(200)
        .json({ message: "Feedback Criteria updated successfully" });
    } else {
      res.status(404).json({ message: "Feedback Criteria not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error updating feedback Criteria",
        error: error.message,
      });
  }
};

export const deleteFeedbackCriteria = async (req, res) => {
  try {
    const deleted = await FeedbackCriteria.destroy({
      where: { id: req.params.id },
    });
    if (deleted === 1) {
      res
        .status(200)
        .json({ message: "Feedback Criteria deleted successfully" });
    } else {
      res.status(404).json({ message: "Feedback Criteria not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error deleting feedback Criteria",
        error: error.message,
      });
  }
};

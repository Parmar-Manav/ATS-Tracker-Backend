import { Score } from "../models/index.js";

export const getAllScores = async (req, res) => {
  try {
    const scores = await Score.findAll();
    res.status(200).json(scores);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving scores", error: error.message });
  }
};

export const getScoreById = async (req, res) => {
  try {
    const score = await Score.findByPk(req.params.id);
    if (score) {
      res.status(200).json(score);
    } else {
      res.status(404).json({ message: "Score not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving score", error: error.message });
  }
};

export const createScore = async (req, res) => {
  try {
    const newScore = await Score.create(req.body);
    res.status(201).json(newScore);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating score", error: error.message });
  }
};

export const updateScore = async (req, res) => {
  try {
    const [updated] = await Score.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated === 1) {
      res.status(200).json({ message: "Score updated successfully" });
    } else {
      res.status(404).json({ message: "Score not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating score", error: error.message });
  }
};

export const deleteScore = async (req, res) => {
  try {
    const deleted = await Score.destroy({
      where: { id: req.params.id },
    });
    if (deleted === 1) {
      res.status(200).json({ message: "Score deleted successfully" });
    } else {
      res.status(404).json({ message: "Score not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting score", error: error.message });
  }
};

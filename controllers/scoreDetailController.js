import { ScoreDetail } from "../models/index.js";

export const getAllScoreDetails = async (req, res) => {
  try {
    const scoreDetails = await ScoreDetail.findAll();
    res.status(200).json(scoreDetails);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error retrieving score details",
        error: error.message,
      });
  }
};

export const getScoreDetailById = async (req, res) => {
  try {
    const scoreDetail = await ScoreDetail.findByPk(req.params.id);
    if (scoreDetail) {
      res.status(200).json(scoreDetail);
    } else {
      res.status(404).json({ message: "Score detail not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving score detail", error: error.message });
  }
};

export const createScoreDetail = async (req, res) => {
  try {
    const newScoreDetail = await ScoreDetail.create(req.body);
    res.status(201).json(newScoreDetail);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating score detail", error: error.message });
  }
};

export const updateScoreDetail = async (req, res) => {
  try {
    const updated = await ScoreDetail.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated[0] === 1) {
      res.status(200).json({ message: "Score detail updated successfully" });
    } else {
      res.status(404).json({ message: "Score detail not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating score detail", error: error.message });
  }
};

export const deleteScoreDetail = async (req, res) => {
  try {
    const deleted = await ScoreDetail.destroy({
      where: { id: req.params.id },
    });
    if (deleted === 1) {
      res.status(200).json({ message: "Score detail deleted successfully" });
    } else {
      res.status(404).json({ message: "Score detail not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting score detail", error: error.message });
  }
};

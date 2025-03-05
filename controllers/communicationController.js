import { Communication } from "../models/index.js";

// Get all communications
export const getAllCommunications = async (req, res) => {
  try {
    const communications = await Communication.findAll();
    res.status(200).json(communications);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error retrieving communications",
        error: error.message,
      });
  }
};

// Get a single communication by ID
export const getCommunicationById = async (req, res) => {
  try {
    const communication = await Communication.findByPk(req.params.id);
    if (communication) {
      res.status(200).json(communication);
    } else {
      res.status(404).json({ message: "Communication not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error retrieving communication",
        error: error.message,
      });
  }
};

// Create a new communication
export const createCommunication = async (req, res) => {
  try {
    const newCommunication = await Communication.create(req.body);
    res.status(201).json(newCommunication);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating communication", error: error.message });
  }
};

// Update a communication
export const updateCommunication = async (req, res) => {
  try {
    const updated = await Communication.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated[0] === 1) {
      res.status(200).json({ message: "Communication updated successfully" });
    } else {
      res.status(404).json({ message: "Communication not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating communication", error: error.message });
  }
};

// Delete a communication
export const deleteCommunication = async (req, res) => {
  try {
    const deleted = await Communication.destroy({
      where: { id: req.params.id },
    });
    if (deleted === 1) {
      res.status(200).json({ message: "Communication deleted successfully" });
    } else {
      res.status(404).json({ message: "Communication not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting communication", error: error.message });
  }
};

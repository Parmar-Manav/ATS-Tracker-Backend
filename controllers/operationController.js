import { Operation } from "../models/index.js";

export const getAllOperations = async (req, res) => {
  try {
    const operations = await Operation.findAll();
    res.status(200).json(operations);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving operations", error: error.message });
  }
};

export const getOperationById = async (req, res) => {
  try {
    const operation = await Operation.findByPk(req.params.id);
    if (operation) {
      res.status(200).json(operation);
    } else {
      res.status(404).json({ message: "Operation not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving operation", error: error.message });
  }
};

export const createOperation = async (req, res) => {
  try {
    const newOperation = await Operation.create(req.body);
    res.status(201).json(newOperation);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating operation", error: error.message });
  }
};

export const updateOperation = async (req, res) => {
  try {
    const [updated] = await Operation.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated === 1) {
      res.status(200).json({ message: "Operation updated successfully" });
    } else {
      res.status(404).json({ message: "Operation not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating operation", error: error.message });
  }
};

export const deleteOperation = async (req, res) => {
  try {
    const deleted = await Operation.destroy({
      where: { id: req.params.id },
    });
    if (deleted === 1) {
      res.status(200).json({ message: "Operation deleted successfully" });
    } else {
      res.status(404).json({ message: "Operation not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting operation", error: error.message });
  }
};

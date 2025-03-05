import { DocumentContent } from "../models/index.js";

export const getAllDocumentContents = async (req, res) => {
  try {
    const documentContents = await DocumentContent.findAll();
    res.status(200).json(documentContents);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error retrieving document contents",
        error: error.message,
      });
  }
};

export const getDocumentContentById = async (req, res) => {
  try {
    const documentContent = await DocumentContent.findByPk(req.params.id);
    if (documentContent) {
      res.status(200).json(documentContent);
    } else {
      res.status(404).json({ message: "Document content not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error retrieving document content",
        error: error.message,
      });
  }
};

export const createDocumentContent = async (req, res) => {
  try {
    const newDocumentContent = await DocumentContent.create(req.body);
    res.status(201).json(newDocumentContent);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error creating document content",
        error: error.message,
      });
  }
};

export const updateDocumentContent = async (req, res) => {
  try {
    const updated = await DocumentContent.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated[0] === 1) {
      res
        .status(200)
        .json({ message: "Document content updated successfully" });
    } else {
      res.status(404).json({ message: "Document content not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error updating document content",
        error: error.message,
      });
  }
};

export const deleteDocumentContent = async (req, res) => {
  try {
    const deleted = await DocumentContent.destroy({
      where: { id: req.params.id },
    });
    if (deleted === 1) {
      res
        .status(200)
        .json({ message: "Document content deleted successfully" });
    } else {
      res.status(404).json({ message: "Document content not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error deleting document content",
        error: error.message,
      });
  }
};

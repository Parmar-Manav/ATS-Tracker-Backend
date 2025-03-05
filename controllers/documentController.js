import { Document } from "../models/index.js"

export const getAllDocuments = async (req, res) => {
  try {
    const documents = await Document.findAll()
    res.status(200).json(documents)
  } catch (error) {
    res.status(500).json({ message: "Error retrieving documents", error: error.message })
  }
}

export const getDocumentById = async (req, res) => {
  try {
    const document = await Document.findByPk(req.params.id)
    if (document) {
      res.status(200).json(document)
    } else {
      res.status(404).json({ message: "Document not found" })
    }
  } catch (error) {
    res.status(500).json({ message: "Error retrieving document", error: error.message })
  }
}

export const createDocument = async (req, res) => {
  try {
    const newDocument = await Document.create(req.body)
    res.status(201).json(newDocument)
  } catch (error) {
    res.status(500).json({ message: "Error creating document", error: error.message })
  }
}

export const updateDocument = async (req, res) => {
  try {
    const [updated] = await Document.update(req.body, {
      where: { id: req.params.id },
    })
    if (updated === 1) {
      res.status(200).json({ message: "Document updated successfully" })
    } else {
      res.status(404).json({ message: "Document not found" })
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating document", error: error.message })
  }
}

export const deleteDocument = async (req, res) => {
  try {
    const deleted = await Document.destroy({
      where: { id: req.params.id },
    })
    if (deleted === 1) {
      res.status(200).json({ message: "Document deleted successfully" })
    } else {
      res.status(404).json({ message: "Document not found" })
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting document", error: error.message })
  }
}


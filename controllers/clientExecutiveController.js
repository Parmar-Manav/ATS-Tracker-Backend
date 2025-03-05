import { ClientExecutive } from "../models/index.js"

export const getAllClientExecutives = async (req, res) => {
  try {
    const clientExecutives = await ClientExecutive.findAll()
    res.status(200).json(clientExecutives)
  } catch (error) {
    res.status(500).json({ message: "Error retrieving client executives", error: error.message })
  }
}

export const getClientExecutiveById = async (req, res) => {
  try {
    const clientExecutive = await ClientExecutive.findByPk(req.params.id)
    if (clientExecutive) {
      res.status(200).json(clientExecutive)
    } else {
      res.status(404).json({ message: "Client executive not found" })
    }
  } catch (error) {
    res.status(500).json({ message: "Error retrieving client executive", error: error.message })
  }
}

export const createClientExecutive = async (req, res) => {
  try {
    const newClientExecutive = await ClientExecutive.create(req.body)
    res.status(201).json(newClientExecutive)
  } catch (error) {
    res.status(500).json({ message: "Error creating client executive", error: error.message })
  }
}

export const updateClientExecutive = async (req, res) => {
  try {
    const [updated] = await ClientExecutive.update(req.body, {
      where: { id: req.params.id },
    })
    if (updated === 1) {
      res.status(200).json({ message: "Client executive updated successfully" })
    } else {
      res.status(404).json({ message: "Client executive not found" })
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating client executive", error: error.message })
  }
}

export const deleteClientExecutive = async (req, res) => {
  try {
    const deleted = await ClientExecutive.destroy({
      where: { id: req.params.id },
    })
    if (deleted === 1) {
      res.status(200).json({ message: "Client executive deleted successfully" })
    } else {
      res.status(404).json({ message: "Client executive not found" })
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting client executive", error: error.message })
  }
}


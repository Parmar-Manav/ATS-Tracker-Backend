import { Client } from "../models/index.js"

export const getAllClients = async (req, res) => {
  try {
    const clients = await Client.findAll()
    res.status(200).json(clients)
  } catch (error) {
    res.status(500).json({ message: "Error retrieving clients", error: error.message })
  }
}

export const getClientById = async (req, res) => {
  try {
    const client = await Client.findByPk(req.params.id)
    if (client) {
      res.status(200).json(client)
    } else {
      res.status(404).json({ message: "Client not found" })
    }
  } catch (error) {
    res.status(500).json({ message: "Error retrieving client", error: error.message })
  }
}

export const createClient = async (req, res) => {
  try {
    const newClient = await Client.create(req.body)
    res.status(201).json(newClient)
  } catch (error) {
    res.status(500).json({ message: "Error creating client", error: error.message })
  }
}

export const updateClient = async (req, res) => {
  try {
    const [updated] = await Client.update(req.body, {
      where: { id: req.params.id },
    })
    if (updated === 1) {
      res.status(200).json({ message: "Client updated successfully" })
    } else {
      res.status(404).json({ message: "Client not found" })
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating client", error: error.message })
  }
}

export const deleteClient = async (req, res) => {
  try {
    const deleted = await Client.destroy({
      where: { id: req.params.id },
    })
    if (deleted === 1) {
      res.status(200).json({ message: "Client deleted successfully" })
    } else {
      res.status(404).json({ message: "Client not found" })
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting client", error: error.message })
  }
}


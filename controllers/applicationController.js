import { Application } from "../models/index.js"

export const getAllApplications = async (req, res) => {
  try {
    const applications = await Application.findAll()
    res.status(200).json(applications)
  } catch (error) {
    res.status(500).json({ message: "Error retrieving applications", error: error.message })
  }
}

export const getApplicationById = async (req, res) => {
  try {
    const application = await Application.findByPk(req.params.id)
    if (application) {
      res.status(200).json(application)
    } else {
      res.status(404).json({ message: "Application not found" })
    }
  } catch (error) {
    res.status(500).json({ message: "Error retrieving application", error: error.message })
  }
}

export const createApplication = async (req, res) => {
  try {
    const newApplication = await Application.create(req.body)
    res.status(201).json(newApplication)
  } catch (error) {
    res.status(500).json({ message: "Error creating application", error: error.message })
  }
}

export const updateApplication = async (req, res) => {
  try {
    const [updated] = await Application.update(req.body, {
      where: { id: req.params.id },
    })
    if (updated === 1) {
      res.status(200).json({ message: "Application updated successfully" })
    } else {
      res.status(404).json({ message: "Application not found" })
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating application", error: error.message })
  }
}

export const deleteApplication = async (req, res) => {
  try {
    const deleted = await Application.destroy({
      where: { id: req.params.id },
    })
    if (deleted === 1) {
      res.status(200).json({ message: "Application deleted successfully" })
    } else {
      res.status(404).json({ message: "Application not found" })
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting application", error: error.message })
  }
}


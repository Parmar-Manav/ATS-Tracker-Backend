import { Applicant } from "../models/index.js"

export const getAllApplicants = async (req, res) => {
  try {
    const applicants = await Applicant.findAll()
    res.status(200).json(applicants)
  } catch (error) {
    res.status(500).json({ message: "Error retrieving applicants", error: error.message })
  }
}

export const getApplicantById = async (req, res) => {
  try {
    const applicant = await Applicant.findByPk(req.params.id)
    if (applicant) {
      res.status(200).json(applicant)
    } else {
      res.status(404).json({ message: "Applicant not found" })
    }
  } catch (error) {
    res.status(500).json({ message: "Error retrieving applicant", error: error.message })
  }
}

export const createApplicant = async (req, res) => {
  try {
    const newApplicant = await Applicant.create(req.body)
    res.status(201).json(newApplicant)
  } catch (error) {
    res.status(500).json({ message: "Error creating applicant", error: error.message })
  }
}

export const updateApplicant = async (req, res) => {
  try {
    const [updated] = await Applicant.update(req.body, {
      where: { id: req.params.id },
    })
    if (updated === 1) {
      res.status(200).json({ message: "Applicant updated successfully" })
    } else {
      res.status(404).json({ message: "Applicant not found" })
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating applicant", error: error.message })
  }
}

export const deleteApplicant = async (req, res) => {
  try {
    const deleted = await Applicant.destroy({
      where: { id: req.params.id },
    })
    if (deleted === 1) {
      res.status(200).json({ message: "Applicant deleted successfully" })
    } else {
      res.status(404).json({ message: "Applicant not found" })
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting applicant", error: error.message })
  }
}


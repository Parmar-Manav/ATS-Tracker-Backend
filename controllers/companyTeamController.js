import { CompanyTeam } from "../models/index.js"

export const getAllCompanyTeams = async (req, res) => {
  try {
    const companyTeams = await CompanyTeam.findAll()
    res.status(200).json(companyTeams)
  } catch (error) {
    res.status(500).json({ message: "Error retrieving company teams", error: error.message })
  }
}

export const getCompanyTeamById = async (req, res) => {
  try {
    const companyTeam = await CompanyTeam.findByPk(req.params.id)
    if (companyTeam) {
      res.status(200).json(companyTeam)
    } else {
      res.status(404).json({ message: "Company team not found" })
    }
  } catch (error) {
    res.status(500).json({ message: "Error retrieving company team", error: error.message })
  }
}

export const createCompanyTeam = async (req, res) => {
  try {
    const newCompanyTeam = await CompanyTeam.create(req.body)
    res.status(201).json(newCompanyTeam)
  } catch (error) {
    res.status(500).json({ message: "Error creating company team", error: error.message })
  }
}

export const updateCompanyTeam = async (req, res) => {
  try {
    const [updated] = await CompanyTeam.update(req.body, {
      where: { id: req.params.id },
    })
    if (updated === 1) {
      res.status(200).json({ message: "Company team updated successfully" })
    } else {
      res.status(404).json({ message: "Company team not found" })
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating company team", error: error.message })
  }
}

export const deleteCompanyTeam = async (req, res) => {
  try {
    const deleted = await CompanyTeam.destroy({
      where: { id: req.params.id },
    })
    if (deleted === 1) {
      res.status(200).json({ message: "Company team deleted successfully" })
    } else {
      res.status(404).json({ message: "Company team not found" })
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting company team", error: error.message })
  }
}


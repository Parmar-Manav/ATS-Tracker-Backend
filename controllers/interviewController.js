import { Interview } from "../models/index.js"

export const getAllInterviews = async (req, res) => {
  try {
    const interviews = await Interview.findAll()
    res.status(200).json(interviews)
  } catch (error) {
    res.status(500).json({ message: "Error retrieving interviews", error: error.message })
  }
}

export const getInterviewById = async (req, res) => {
  try {
    const interview = await Interview.findByPk(req.params.id)
    if (interview) {
      res.status(200).json(interview)
    } else {
      res.status(404).json({ message: "Interview not found" })
    }
  } catch (error) {
    res.status(500).json({ message: "Error retrieving interview", error: error.message })
  }
}

export const createInterview = async (req, res) => {
  try {
    const newInterview = await Interview.create(req.body)
    res.status(201).json(newInterview)
  } catch (error) {
    res.status(500).json({ message: "Error creating interview", error: error.message })
  }
}

export const updateInterview = async (req, res) => {
  try {
    const [updated] = await Interview.update(req.body, {
      where: { id: req.params.id },
    })
    if (updated === 1) {
      res.status(200).json({ message: "Interview updated successfully" })
    } else {
      res.status(404).json({ message: "Interview not found" })
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating interview", error: error.message })
  }
}

export const deleteInterview = async (req, res) => {
  try {
    const deleted = await Interview.destroy({
      where: { id: req.params.id },
    })
    if (deleted === 1) {
      res.status(200).json({ message: "Interview deleted successfully" })
    } else {
      res.status(404).json({ message: "Interview not found" })
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting interview", error: error.message })
  }
}


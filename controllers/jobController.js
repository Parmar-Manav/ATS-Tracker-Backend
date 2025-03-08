import { Job } from "../models/index.js"

export const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.findAll()
    res.status(200).json(jobs)
  } catch (error) {
    res.status(500).json({ message: "Error retrieving jobs", error: error.message })
  }
}

export const getJobById = async (req, res) => {
  try {
    const job = await Job.findByPk(req.params.id)
    if (job) {
      res.status(200).json(job)
    } else {
      res.status(404).json({ message: "Job not found" })
    }
  } catch (error) {
    res.status(500).json({ message: "Error retrieving job", error: error.message })
  }
}

export const createJob = async (req, res) => {
  try {
    const newJob = await Job.create(req.body)
    res.status(201).json(newJob)
  } catch (error) {
    res.status(500).json({ message: "Error creating job", error: error.message })
  }
}

export const updateJob = async (req, res) => {
  try {
    const [updated] = await Job.update(req.body, {
      where: { id: req.params.id },
    })
    if (updated === 1) {
      res.status(200).json({ message: "Job updated successfully" })
    } else {
      res.status(404).json({ message: "Job not found" })
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating job", error: error.message })
  }
}

export const deleteJob = async (req, res) => {
  try {
    const deleted = await Job.destroy({
      where: { id: req.params.id },
    })
    if (deleted === 1) {
      res.status(200).json({ message: "Job deleted successfully" })
    } else {
      res.status(404).json({ message: "Job not found" })
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting job", error: error.message })
  }
}
import { Job } from "../models/index.js"
import {sequelize} from "../config/sequelize.js"

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

export const bulkCreateJobs = async (req, res) => {
  try {
    const jobs = req.body.jobs; // Expecting an array of job objects

    if (!Array.isArray(jobs) || jobs.length === 0) {
      return res.status(400).json({ message: "Invalid request, expected an array of jobs" });
    }

    const createdJobs = await Job.bulkCreate(jobs);
    res.status(201).json({ message: "Jobs created successfully", data: createdJobs });
  } catch (error) {
    res.status(500).json({ message: "Error creating jobs", error: error.message });
  }
};


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

export const bulkDeleteJobs = async (req, res) => {
  const transaction = await sequelize.transaction();
  try {
    const { ids } = req.body;

    if (!Array.isArray(ids) || ids.length === 0 || !ids.every(id => typeof id === "number")) {
      return res.status(400).json({ message: "Invalid request, expected a non-empty array of numeric job IDs" });
    }

    // Find if the jobs exist before deleting
    const jobsToDelete = await Job.findAll({ where: { id: ids }, transaction });

    if (jobsToDelete.length === 0) {
      await transaction.rollback();
      return res.status(404).json({ message: "No jobs found with the provided IDs" });
    }

    // Delete jobs
    const deletedCount = await Job.destroy({
      where: { id: ids },
      transaction,
    });

    console.log(`Deleted ${deletedCount} jobs`);

    // Check if table is empty after deletion, then reset identity
    const remainingJobs = await Job.count({ transaction });

    if (remainingJobs === 0) {
      await sequelize.query("DBCC CHECKIDENT ('jobs', RESEED, 0);", { transaction });
    }

    await transaction.commit();
    res.status(200).json({ message: "Jobs deleted successfully", count: deletedCount });
  } catch (error) {
    await transaction.rollback();
    console.error("Error deleting jobs:", error);
    res.status(500).json({ message: "Error deleting jobs", error: error.message });
  }
};
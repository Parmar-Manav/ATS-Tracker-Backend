import { JobExternalPosting } from "../models/index.js";

export const getAllJobExternalPostings = async (req, res) => {
  try {
    const jobExternalPostings = await JobExternalPosting.findAll();
    res.status(200).json(jobExternalPostings);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error retrieving job external postings",
        error: error.message,
      });
  }
};

export const getJobExternalPostingById = async (req, res) => {
  try {
    const jobExternalPosting = await JobExternalPosting.findByPk(req.params.id);
    if (jobExternalPosting) {
      res.status(200).json(jobExternalPosting);
    } else {
      res.status(404).json({ message: "Job external posting not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error retrieving job external posting",
        error: error.message,
      });
  }
};

export const createJobExternalPosting = async (req, res) => {
  try {
    const newJobExternalPosting = await JobExternalPosting.create(req.body);
    res.status(201).json(newJobExternalPosting);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error creating job external posting",
        error: error.message,
      });
  }
};

export const updateJobExternalPosting = async (req, res) => {
  try {
    const updated = await JobExternalPosting.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated[0] === 1) {
      res
        .status(200)
        .json({ message: "Job external posting updated successfully" });
    } else {
      res.status(404).json({ message: "Job external posting not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error updating job external posting",
        error: error.message,
      });
  }
};

export const deleteJobExternalPosting = async (req, res) => {
  try {
    const deleted = await JobExternalPosting.destroy({
      where: { id: req.params.id },
    });
    if (deleted === 1) {
      res
        .status(200)
        .json({ message: "Job external posting deleted successfully" });
    } else {
      res.status(404).json({ message: "Job external posting not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error deleting job external posting",
        error: error.message,
      });
  }
};

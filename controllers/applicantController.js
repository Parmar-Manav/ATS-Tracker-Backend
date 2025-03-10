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

export const bulkCreateApplicants = async (req, res) => {
  try {
    const newApplicants = await Applicant.bulkCreate(req.body);
    res.status(201).json({ message: "Applicants created successfully", applicants: newApplicants });
  } catch (error) {
    res.status(500).json({ message: "Error creating applicants", error: error.message });
  }
};

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

export const bulkDeleteApplicants = async (req, res) => {
  try {
    const { ids } = req.body;

    // ✅ Validate: Ensure IDs exist and are an array of numbers
    if (!ids || !Array.isArray(ids) || !ids.every(id => typeof id === "number")) {
      return res.status(400).json({ message: "Invalid request, expected an array of numeric IDs" });
    }

    console.log("Deleting applicants with IDs:", ids); // Debugging Log

    // Perform bulk delete
    const deleted = await Applicant.destroy({
      where: { id: ids },
    });

    if (deleted > 0) {
      res.status(200).json({ message: "Applicants deleted successfully", count: deleted });
    } else {
      res.status(404).json({ message: "No applicants found with the provided IDs" });
    }
  } catch (error) {
    console.error("Bulk delete error:", error); // Debugging Log
    res.status(500).json({ message: "Error deleting applicants", error: error.message });
  }
};



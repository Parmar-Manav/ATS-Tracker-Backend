import { Applicant } from "../models/index.js"
import { Parser } from "json2csv";
import { Op } from "sequelize";

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
    const id = parseInt(req.params.id, 10);

    if (isNaN(id)) {
      return res.status(400).json({ message: "Invalid applicant ID. Must be a number." });
    }

    const applicant = await Applicant.findByPk(id);

    if (applicant) {
      res.status(200).json(applicant);
    } else {
      res.status(404).json({ message: "Applicant not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error retrieving applicant", error: error.message });
  }
};



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
    const id = Number(req.params.id);

    if (!Number.isInteger(id)) {
      return res.status(400).json({ message: "Invalid applicant ID. Must be a number." });
    }

    const [updated] = await Applicant.update(req.body, {
      where: { id },
    });

    if (updated === 1) {
      res.status(200).json({ message: "Applicant updated successfully" });
    } else {
      res.status(404).json({ message: "Applicant not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating applicant", error: error.message });
  }
};


export const deleteApplicant = async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (!Number.isInteger(id)) {
      return res.status(400).json({ message: "Invalid applicant ID. Must be a number." });
    }

    const deleted = await Applicant.destroy({
      where: { id },
    });

    if (deleted === 1) {
      res.status(200).json({ message: "Applicant deleted successfully" });
    } else {
      res.status(404).json({ message: "Applicant not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting applicant", error: error.message });
  }
};


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

export const searchApplicants = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query) {
      return res.status(400).json({ message: "Search query is required" });
    }

    const applicants = await Applicant.findAll({
      where: {
        [Op.or]: [
          { firstName: { [Op.like]: `%${query}%` } }, // Search in firstName
          { lastName: { [Op.like]: `%${query}%` } }, // Search in lastName
          { email: { [Op.like]: `%${query}%` } } // Search in email
        ],
      },
    });

    res.status(200).json(applicants);
  } catch (error) {
    res.status(500).json({ message: "Error searching applicants", error: error.message });
  }
};

export const filterApplicantsByStatus = async (req, res) => {
  try {
    console.log("Received query:", req.query); // Debugging

    const { status } = req.query;

    if (!status) {
      return res.status(400).json({ message: "Status parameter is required" });
    }

    console.log("Filtering applicants by status:", status);

    const applicants = await Applicant.findAll({
      where: { status }, // Filtering based on status field
    });

    if (applicants.length > 0) {
      res.status(200).json(applicants);
    } else {
      res.status(404).json({ message: "No applicants found for the given status" });
    }
  } catch (error) {
    console.error("Error filtering applicants:", error);
    res.status(500).json({ message: "Error filtering applicants", error: error.message });
  }
};


export const exportApplicantsCSV = async (req, res) => {
  try {
    const applicants = await Applicant.findAll();

    if (applicants.length === 0) {
      return res.status(404).json({ message: "No applicants found" });
    }

    const fields = ["id", "name", "email", "status", "createdAt"];
    const json2csvParser = new Parser({ fields });
    const csv = json2csvParser.parse(applicants);

    res.header("Content-Type", "text/csv");
    res.attachment("applicants.csv");
    res.status(200).send(csv);
  } catch (error) {
    res.status(500).json({ message: "Error exporting applicants", error: error.message });
  }
};
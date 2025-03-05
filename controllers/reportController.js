import { Report } from "../models/index.js";

export const getAllReports = async (req, res) => {
  try {
    const reports = await Report.findAll();
    res.status(200).json(reports);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving reports", error: error.message });
  }
};

export const getReportById = async (req, res) => {
  try {
    const report = await Report.findByPk(req.params.id);
    if (report) {
      res.status(200).json(report);
    } else {
      res.status(404).json({ message: "Report not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving report", error: error.message });
  }
};

export const createReport = async (req, res) => {
  try {
    const newReport = await Report.create(req.body);
    res.status(201).json(newReport);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating report", error: error.message });
  }
};

export const updateReport = async (req, res) => {
  try {
    const updated = await Report.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated[0] === 1) {
      res.status(200).json({ message: "Report updated successfully" });
    } else {
      res.status(404).json({ message: "Report not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating report", error: error.message });
  }
};

export const deleteReport = async (req, res) => {
  try {
    const deleted = await Report.destroy({
      where: { id: req.params.id },
    });
    if (deleted === 1) {
      res.status(200).json({ message: "Report deleted successfully" });
    } else {
      res.status(404).json({ message: "Report not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting report", error: error.message });
  }
};

import { InterviewNote } from "../models/index.js";

export const getAllInterviewNotes = async (req, res) => {
  try {
    const interviewNotes = await InterviewNote.findAll();
    res.status(200).json(interviewNotes);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error retrieving interview notes",
        error: error.message,
      });
  }
};

export const getInterviewNoteById = async (req, res) => {
  try {
    const interviewNote = await InterviewNote.findByPk(req.params.id);
    if (interviewNote) {
      res.status(200).json(interviewNote);
    } else {
      res.status(404).json({ message: "Interview note not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error retrieving interview note",
        error: error.message,
      });
  }
};

export const createInterviewNote = async (req, res) => {
  try {
    const newInterviewNote = await InterviewNote.create(req.body);
    res.status(201).json(newInterviewNote);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating interview note", error: error.message });
  }
};

export const updateInterviewNote = async (req, res) => {
  try {
    const updated = await InterviewNote.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated[0] === 1) {
      res.status(200).json({ message: "Interview note updated successfully" });
    } else {
      res.status(404).json({ message: "Interview note not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating interview note", error: error.message });
  }
};

export const deleteInterviewNote = async (req, res) => {
  try {
    const deleted = await InterviewNote.destroy({
      where: { id: req.params.id },
    });
    if (deleted === 1) {
      res.status(200).json({ message: "Interview note deleted successfully" });
    } else {
      res.status(404).json({ message: "Interview note not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting interview note", error: error.message });
  }
};

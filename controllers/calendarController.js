import { Calendar } from "../models/index.js";

export const getAllCalendarEvents = async (req, res) => {
  try {
    const calendarEvents = await Calendar.findAll();
    res.status(200).json(calendarEvents);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error retrieving calendar events",
        error: error.message,
      });
  }
};

export const getCalendarEventById = async (req, res) => {
  try {
    const calendarEvent = await Calendar.findByPk(req.params.id);
    if (calendarEvent) {
      res.status(200).json(calendarEvent);
    } else {
      res.status(404).json({ message: "Calendar event not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error retrieving calendar event",
        error: error.message,
      });
  }
};

export const createCalendarEvent = async (req, res) => {
  try {
    const newCalendarEvent = await Calendar.create(req.body);
    res.status(201).json(newCalendarEvent);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating calendar event", error: error.message });
  }
};

export const updateCalendarEvent = async (req, res) => {
  try {
    const updated = await Calendar.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated[0] === 1) {
      res.status(200).json({ message: "Calendar event updated successfully" });
    } else {
      res.status(404).json({ message: "Calendar event not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating calendar event", error: error.message });
  }
};

export const deleteCalendarEvent = async (req, res) => {
  try {
    const deleted = await Calendar.destroy({
      where: { id: req.params.id },
    });
    if (deleted === 1) {
      res.status(200).json({ message: "Calendar event deleted successfully" });
    } else {
      res.status(404).json({ message: "Calendar event not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting calendar event", error: error.message });
  }
};

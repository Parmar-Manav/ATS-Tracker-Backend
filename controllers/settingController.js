import { Setting } from "../models/index.js";

export const getAllSettings = async (req, res) => {
  try {
    const settings = await Setting.findAll();
    res.status(200).json(settings);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving settings", error: error.message });
  }
};

export const getSettingById = async (req, res) => {
  try {
    const setting = await Setting.findByPk(req.params.id);
    if (setting) {
      res.status(200).json(setting);
    } else {
      res.status(404).json({ message: "Setting not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving setting", error: error.message });
  }
};

export const createSetting = async (req, res) => {
  try {
    const newSetting = await Setting.create(req.body);
    res.status(201).json(newSetting);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating setting", error: error.message });
  }
};

export const updateSetting = async (req, res) => {
  try {
    const updated = await Setting.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated[0] === 1) {
      res.status(200).json({ message: "Setting updated successfully" });
    } else {
      res.status(404).json({ message: "Setting not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating setting", error: error.message });
  }
};

export const deleteSetting = async (req, res) => {
  try {
    const deleted = await Setting.destroy({
      where: { id: req.params.id },
    });
    if (deleted === 1) {
      res.status(200).json({ message: "Setting deleted successfully" });
    } else {
      res.status(404).json({ message: "Setting not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting setting", error: error.message });
  }
};

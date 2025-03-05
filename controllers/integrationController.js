import { Integration } from "../models/index.js";

export const getAllIntegrations = async (req, res) => {
  try {
    const integrations = await Integration.findAll();
    res.status(200).json(integrations);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving integrations", error: error.message });
  }
};

export const getIntegrationById = async (req, res) => {
  try {
    const integration = await Integration.findByPk(req.params.id);
    if (integration) {
      res.status(200).json(integration);
    } else {
      res.status(404).json({ message: "Integration not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving integration", error: error.message });
  }
};

export const createIntegration = async (req, res) => {
  try {
    const newIntegration = await Integration.create(req.body);
    res.status(201).json(newIntegration);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating integration", error: error.message });
  }
};

export const updateIntegration = async (req, res) => {
  try {
    const updated = await Integration.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated[0] === 1) {
      res.status(200).json({ message: "Integration updated successfully" });
    } else {
      res.status(404).json({ message: "Integration not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating integration", error: error.message });
  }
};

export const deleteIntegration = async (req, res) => {
  try {
    const deleted = await Integration.destroy({
      where: { id: req.params.id },
    });
    if (deleted === 1) {
      res.status(200).json({ message: "Integration deleted successfully" });
    } else {
      res.status(404).json({ message: "Integration not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting integration", error: error.message });
  }
};

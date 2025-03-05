import { EmailTemplate } from "../models/index.js";

export const getAllEmailTemplates = async (req, res) => {
  try {
    const emailTemplates = await EmailTemplate.findAll();
    res.status(200).json(emailTemplates);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error retrieving email templates",
        error: error.message,
      });
  }
};

export const getEmailTemplateById = async (req, res) => {
  try {
    const emailTemplate = await EmailTemplate.findByPk(req.params.id);
    if (emailTemplate) {
      res.status(200).json(emailTemplate);
    } else {
      res.status(404).json({ message: "Email template not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error retrieving email template",
        error: error.message,
      });
  }
};

export const createEmailTemplate = async (req, res) => {
  try {
    const newEmailTemplate = await EmailTemplate.create(req.body);
    res.status(201).json(newEmailTemplate);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating email template", error: error.message });
  }
};

export const updateEmailTemplate = async (req, res) => {
  try {
    const updated = await EmailTemplate.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated[0] === 1) {
      res.status(200).json({ message: "Email template updated successfully" });
    } else {
      res.status(404).json({ message: "Email template not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating email template", error: error.message });
  }
};

export const deleteEmailTemplate = async (req, res) => {
  try {
    const deleted = await EmailTemplate.destroy({
      where: { id: req.params.id },
    });
    if (deleted === 1) {
      res.status(200).json({ message: "Email template deleted successfully" });
    } else {
      res.status(404).json({ message: "Email template not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting email template", error: error.message });
  }
};

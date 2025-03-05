import { Referral } from "../models/index.js";

// Get all referrals
export const getAllReferrals = async (req, res) => {
  try {
    const referrals = await Referral.findAll();
    res.status(200).json(referrals);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving referrals", error: error.message });
  }
};

// Get a single referral by ID
export const getReferralById = async (req, res) => {
  try {
    const referral = await Referral.findByPk(req.params.id);
    if (referral) {
      res.status(200).json(referral);
    } else {
      res.status(404).json({ message: "Referral not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving referral", error: error.message });
  }
};

// Create a new referral
export const createReferral = async (req, res) => {
  try {
    const newReferral = await Referral.create(req.body);
    res.status(201).json(newReferral);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating referral", error: error.message });
  }
};

// Update a referral
export const updateReferral = async (req, res) => {
  try {
    const updated = await Referral.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated[0] === 1) {
      res.status(200).json({ message: "Referral updated successfully" });
    } else {
      res.status(404).json({ message: "Referral not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating referral", error: error.message });
  }
};

// Delete a referral
export const deleteReferral = async (req, res) => {
  try {
    const deleted = await Referral.destroy({
      where: { id: req.params.id },
    });
    if (deleted === 1) {
      res.status(200).json({ message: "Referral deleted successfully" });
    } else {
      res.status(404).json({ message: "Referral not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting referral", error: error.message });
  }
};

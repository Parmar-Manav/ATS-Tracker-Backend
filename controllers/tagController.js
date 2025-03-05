import { Tag } from "../models/index.js";

export const getAllTags = async (req, res) => {
  try {
    const tags = await Tag.findAll();
    res.status(200).json(tags);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving tags", error: error.message });
  }
};

export const getTagById = async (req, res) => {
  try {
    const tag = await Tag.findByPk(req.params.id);
    if (tag) {
      res.status(200).json(tag);
    } else {
      res.status(404).json({ message: "Tag not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving tag", error: error.message });
  }
};

export const createTag = async (req, res) => {
  try {
    const newTag = await Tag.create(req.body);
    res.status(201).json(newTag);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating tag", error: error.message });
  }
};

export const updateTag = async (req, res) => {
  try {
    const updated = await Tag.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated[0] === 1) {
      res.status(200).json({ message: "Tag updated successfully" });
    } else {
      res.status(404).json({ message: "Tag not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating tag", error: error.message });
  }
};

export const deleteTag = async (req, res) => {
  try {
    const deleted = await Tag.destroy({
      where: { id: req.params.id },
    });
    if (deleted === 1) {
      res.status(200).json({ message: "Tag deleted successfully" });
    } else {
      res.status(404).json({ message: "Tag not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting tag", error: error.message });
  }
};

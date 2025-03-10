import { sequelize } from "../config/sequelize.js"
import { DataTypes } from "sequelize";

export const Tag = sequelize.define(
  "Tag",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    //   clientId: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //   },
    tagName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Tag name is required.",
        },
        notEmpty: {
          msg: "Tag name cannot be empty.",
        },
        len: {
          args: [3, 100],
          msg: "Tag name must be between 3 and 100 characters long.",
        },
      },
    },
    tagType: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: {
          args: [["Skill", "Location", "Industry", "Custom"]],
          msg: "Tag type must be one of: Skill, Location, Industry, or Custom.",
        },
      },
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: {
          args: /^#([0-9A-Fa-f]{3}){1,2}$/, // Validates hex color format (e.g., #FFF or #FFFFFF)
          msg: "Color must be a valid hex code (e.g., #FFFFFF or #FFF).",
        },
      },
    },
    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: {
          msg: "Created By must be an integer.",
        },
        min: {
          args: [1],
          msg: "Created By ID must be a positive integer.",
        },
      },
    },
  },
  {
    tableName: "tags",
  }
);
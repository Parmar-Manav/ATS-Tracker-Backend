import { sequelize } from "../config/sequelize.js"
import { DataTypes } from "sequelize";

export const ApplicantTag = sequelize.define(
  "ApplicantTag",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    //   applicant_id: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //   },
    //   tag_id: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //   },
  },
  {
    tableName: "applicant_tags",
  }
);
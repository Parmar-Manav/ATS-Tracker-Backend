import { sequelize } from "../config/sequelize.js"
import { DataTypes } from "sequelize";

export const ApplicantTag = sequelize.define(
    "ApplicantTag",
    {
      applicantTagId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
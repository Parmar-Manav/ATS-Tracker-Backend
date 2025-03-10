import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js"

export const Integration = sequelize.define(
    "Integration",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      platformName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Platform name is required." },
          notEmpty: { msg: "Platform name cannot be empty." },
          len: { args: [3, 255], msg: "Platform name must be between 3 and 255 characters." },
      },
      },
      credentials: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: { msg: "Credentials are required." },
          notEmpty: { msg: "Credentials cannot be empty." },
      },
      },
      lastSync: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notNull: { msg: "Last sync date is required." },
          isDate: { msg: "Last sync must be a valid date." },
          isBefore: {
              args: new Date().toISOString(),
              msg: "Last sync date cannot be in the future.",
          },
      },
      },
      syncStatus: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Sync status is required." },
          notEmpty: { msg: "Sync status cannot be empty." },
          isIn: {
              args: [["Pending", "InProgress", "Completed", "Failed"]],
              msg: "Sync status must be one of 'Pending', 'InProgress', 'Completed', or 'Failed'.",
          },
      },
      },
      // jobId: {
      //   type: DataTypes.INTEGER,
      // },
      // applicantId: {
      //   type: DataTypes.INTEGER,
      // },
    },
    {
      tableName: "integrations",
      indexes: [
        { fields: ["platformName"] },
        { fields: ["syncStatus"] },
    ],
    },
)
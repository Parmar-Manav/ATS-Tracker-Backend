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
      },
      credentials: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      lastSync: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      syncStatus: {
        type: DataTypes.STRING,
        allowNull: false,
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
    },
)
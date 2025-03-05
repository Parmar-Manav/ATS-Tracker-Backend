import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js"
export const OnboardingProgress = sequelize.define(
    "OnboardingProgress",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      // onboardingId: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      //   unique: true,
      // },
      progress: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      tableName: "onboarding_progress",
    },
)
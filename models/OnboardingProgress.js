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
        validate: {
          notNull: {
              msg: "Progress description is required.",
          },
          notEmpty: {
              msg: "Progress cannot be an empty string.",
          },
          len: {
              args: [3, 1000], // Ensures meaningful progress descriptions
              msg: "Progress must be between 3 and 1000 characters.",
          },
      },
      },
    },
    {
      tableName: "onboarding_progress",
    },
)
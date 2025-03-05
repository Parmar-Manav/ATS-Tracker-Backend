import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js"

export const OnboardingTemplate = sequelize.define(
    "OnboardingTemplate",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        // clientId: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },
        templateName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        durationDays: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        tableName: "onboarding_templates",
    },
)
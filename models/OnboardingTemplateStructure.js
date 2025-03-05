import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js"

export const OnboardingTemplateStructure = sequelize.define(
    "OnboardingTemplateStructure",
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
        templateStructure: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        tableName: "onboarding_templates_structure",
    },
)
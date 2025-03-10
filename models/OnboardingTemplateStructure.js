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
            validate: {
                notNull: {
                    msg: "Template structure is required.",
                },
                notEmpty: {
                    msg: "Template structure cannot be empty.",
                },
                len: {
                    args: [5, 5000],
                    msg: "Template structure must be between 5 and 5000 characters.",
                },
            },
        },
    },
    {
        tableName: "onboarding_templates_structure",
    },
)
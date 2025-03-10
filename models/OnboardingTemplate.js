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
            validate: {
                notNull: {
                    msg: "Template Name is required.",
                },
                notEmpty: {
                    msg: "Template Name cannot be empty.",
                },
                len: {
                    args: [3, 255],
                    msg: "Template Name must be between 3 and 255 characters.",
                },
            },
        },
        durationDays: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Duration (days) is required.",
                },
                isInt: {
                    msg: "Duration (days) must be an integer.",
                },
                min: {
                    args: [1],
                    msg: "Duration must be at least 1 day.",
                },
                max: {
                    args: [365],
                    msg: "Duration cannot exceed 365 days.",
                },
            },
        },
    },
    {
        tableName: "onboarding_templates",
    },
)
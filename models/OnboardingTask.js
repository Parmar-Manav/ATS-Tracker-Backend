import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js"

export const OnboardingTask = sequelize.define(
    "OnboardingTask",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        // onboardingId: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },
        taskName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        taskDescription: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        taskType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dueDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // assignedTo: {
        //     type: DataTypes.INTEGER,
        // },
    },
    {
        tableName: "onboarding_tasks",
    },
)
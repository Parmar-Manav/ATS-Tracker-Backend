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
            validate: {
                notNull: { msg: "Task Name is required." },
                notEmpty: { msg: "Task Name cannot be empty." },
                len: { args: [3, 255], msg: "Task Name must be between 3 and 255 characters." },
            },
        },
        taskDescription: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: "Task Description is required." },
                notEmpty: { msg: "Task Description cannot be empty." },
                len: { args: [5, 500], msg: "Task Description must be between 5 and 500 characters." },
            },
        },
        taskType: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: "Task Type is required." },
                notEmpty: { msg: "Task Type cannot be empty." },
                isIn: { args: [["Training", "Documentation", "Meeting", "Other"]], msg: "Invalid Task Type." },
            },
        },
        dueDate: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notNull: { msg: "Due Date is required." },
                isDate: { msg: "Due Date must be a valid date." },
                isAfter: { args: new Date().toISOString(), msg: "Due Date must be in the future." },
            },
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: "Status is required." },
                notEmpty: { msg: "Status cannot be empty." },
                isIn: { args: [["Pending", "In Progress", "Completed", "Overdue"]], msg: "Invalid Status." },
            },
        },
        // assignedTo: {
        //     type: DataTypes.INTEGER,
        // },
    },
    {
        tableName: "onboarding_tasks",
        indexes: [{ fields: ["dueDate"] }, { fields: ["status"] }],
    },
)
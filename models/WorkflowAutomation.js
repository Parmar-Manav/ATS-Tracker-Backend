import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js"

export const WorkflowAutomation = sequelize.define(
    "WorkflowAutomation",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        // workflowId: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },
        automationRules: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Automation rules are required.",
                },
                notEmpty: {
                    msg: "Automation rules cannot be empty.",
                },
                len: {
                    args: [5, 5000], // Ensuring reasonable length
                    msg: "Automation rules must be between 5 and 5000 characters.",
                },
            },
        },
        notifications: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Notifications field is required.",
                },
                notEmpty: {
                    msg: "Notifications cannot be empty.",
                },
                len: {
                    args: [5, 2000], // Ensuring reasonable length
                    msg: "Notifications must be between 5 and 2000 characters.",
                },
            },
        },
    },
    {
        tableName: "workflow_automations",
    },
)
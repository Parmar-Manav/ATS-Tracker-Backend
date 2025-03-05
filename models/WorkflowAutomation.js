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
        },
        notifications: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        tableName: "workflow_automations",
    },
)
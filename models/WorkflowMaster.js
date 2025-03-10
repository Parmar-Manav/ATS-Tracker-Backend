import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js"

export const WorkflowMaster = sequelize.define(
    "WorkflowMaster",
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
        workflowName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Workflow name is required.",
                },
                notEmpty: {
                    msg: "Workflow name cannot be empty.",
                },
                len: {
                    args: [3, 255],
                    msg: "Workflow name must be between 3 and 255 characters.",
                },
            },
        },
    },
    {
        tableName: "workflow_masters",
    },
)
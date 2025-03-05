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
        },
    },
    {
        tableName: "workflow_masters",
    },
)
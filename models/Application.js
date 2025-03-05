import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js"

export const Application = sequelize.define(
    "Application",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        // applicantId: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },
        // jobId: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },
        // teamMemberId: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },
        applyDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        currentStage: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // workflowId: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },
    },
    {
        tableName: "applications",
    },
)
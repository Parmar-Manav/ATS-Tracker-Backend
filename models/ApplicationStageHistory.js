import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js"

export const ApplicationStageHistory = sequelize.define(
    "ApplicationStageHistory",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        // applicationId: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },
        stage: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        timestamp: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        tableName: "application_stage_history",
    },
)

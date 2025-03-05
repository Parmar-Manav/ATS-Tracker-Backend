import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js"

export const SystemLog = sequelize.define(
    "SystemLog",
    {
        logType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        logDetails: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        timestamp: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        tableName: "system_logs",
    },
)
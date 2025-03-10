import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js"

export const SystemLog = sequelize.define(
    "SystemLog",
    {
        logType: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Log type is required.",
                },
                notEmpty: {
                    msg: "Log type cannot be empty.",
                },
                len: {
                    args: [3, 50], // Restrict length between 3 and 50 characters
                    msg: "Log type must be between 3 and 50 characters.",
                },
                isIn: {
                    args: [["INFO", "WARNING", "ERROR", "DEBUG"]],
                    msg: "Log type must be one of: INFO, WARNING, ERROR, DEBUG.",
                },
            },
        },
        logDetails: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        timestamp: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
            validate: {
                notNull: {
                    msg: "Timestamp is required.",
                },
                isDate: {
                    msg: "Timestamp must be a valid date.",
                },
                isBefore: {
                    args: new Date().toISOString(),
                    msg: "Timestamp cannot be in the future.",
                },
            },
        },
    },
    {
        tableName: "system_logs",
        indexes: [
            { fields: ["logType"] },
            { fields: ["timestamp"] },
        ],
    },
)
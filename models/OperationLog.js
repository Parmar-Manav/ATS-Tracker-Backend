import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js"

export const OperationLog = sequelize.define(
    "OperationLog",
    {
        ipAddress: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userAgent: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: "operation_logs",
    },
)
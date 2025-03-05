import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js"

export const Operation = sequelize.define(
    "Operation",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        // teamMemberId: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },
        operationType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        operationDetails: {
            type: DataTypes.TEXT,
        },
        timestamp: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        tableName: "operations",
    },
)
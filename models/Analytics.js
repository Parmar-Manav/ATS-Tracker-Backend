import { sequelize } from "../config/sequelize.js"
import { DataTypes } from "sequelize";

export const Analytics = sequelize.define(
    "Analytics",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        metricName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true, // Ensures it's not an empty string
                len: [3, 255], // Ensures metricName has 3-255 characters
                isAlpha: true, // Ensures only letters (no numbers/symbols)
            },
        },
        metricData: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        calculationDate: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                isDate: true, // Ensures it's a valid date format
                isBefore: new Date().toISOString(), // Ensures past date (no future values)
            },
        },
        entityType: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isIn: [["Job", "User", "Company"]], // Restrict possible values
                notEmpty: true, // Ensures it's not empty
            },
        },
        // entityId: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },
    },
    {
        tableName: "analytics",
        indexes: [
            { fields: ["calculationDate"] },
            { fields: ["entityType"] },
        ],
    }
)
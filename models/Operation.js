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
            validate: {
                notNull: {
                    msg: "Operation type is required.",
                },
                notEmpty: {
                    msg: "Operation type cannot be empty.",
                },
                len: {
                    args: [3, 255],
                    msg: "Operation type must be between 3 and 255 characters.",
                },
            },
        },
        operationDetails: {
            type: DataTypes.TEXT,
            validate: {
                notEmpty: {
                    msg: "Operation details cannot be empty.",
                },
                len: {
                    args: [5, 5000], // Allowing details to be between 5 and 5000 characters
                    msg: "Operation details must be between 5 and 5000 characters.",
                },
            },
        },
        timestamp: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false,
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
        tableName: "operations",
    },
)
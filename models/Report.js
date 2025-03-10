import { sequelize } from "../config/sequelize.js"
import { DataTypes } from "sequelize";

export const Report = sequelize.define(
    "Report",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        // client_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },
        reportName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: "Report name is required." },
                notEmpty: { msg: "Report name cannot be empty." },
                len: { args: [3, 255], msg: "Report name must be between 3 and 255 characters." },
            },
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notNull: { msg: "Description is required." },
                notEmpty: { msg: "Description cannot be empty." },
            },
        },
        query: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notNull: { msg: "Query is required." },
                notEmpty: { msg: "Query cannot be empty." },
            },
        },
        parameters: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notNull: { msg: "Parameters are required." },
                notEmpty: { msg: "Parameters cannot be empty." },
            },
        },
        schedule: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: "Schedule is required." },
                notEmpty: { msg: "Schedule cannot be empty." },
                isIn: {
                    args: [["daily", "weekly", "monthly", "yearly"]],
                    msg: "Schedule must be one of: daily, weekly, monthly, yearly.",
                },
            },
        },
        lastrunDate: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notNull: { msg: "Last run date is required." },
                isDate: { msg: "Last run date must be a valid date." },
                isBefore: {
                    args: new Date().toISOString(),
                    msg: "Last run date cannot be in the future.",
                },
            },
        },
        // createdBy: {
        //     type: DataTypes.STRING,
        //     allowNull:false,
        // },
        // lastmodifiedBy: {
        //     type: DataTypes.STRING,
        //     allowNull:false,
        // },
    },
    {
        tableName: "reports",
        indexes: [{ fields: ["reportName"] }, { fields: ["lastrunDate"] }],
    },
);
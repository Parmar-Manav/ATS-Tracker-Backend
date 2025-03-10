import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js"

export const Communication = sequelize.define(
    "Communication",
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
        type: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: "Type is required." },
                notEmpty: { msg: "Type cannot be empty." },
                isIn: {
                    args: [["email", "sms", "call", "chat"]],
                    msg: "Type must be one of: email, sms, call, chat.",
                },
            },
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notNull: { msg: "Content is required." },
                notEmpty: { msg: "Content cannot be empty." },
                len: {
                    args: [1, 5000],
                    msg: "Content must be between 1 and 5000 characters.",
                },
            },
        },
        sentAt: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notNull: { msg: "SentAt is required." },
                isDate: { msg: "SentAt must be a valid date." },
                isBefore: {
                    args: new Date().toISOString(),
                    msg: "SentAt cannot be a future date.",
                },
            },
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: "Status is required." },
                notEmpty: { msg: "Status cannot be empty." },
                isIn: {
                    args: [["pending", "sent", "failed"]],
                    msg: "Status must be one of: pending, sent, failed.",
                },
            },
        },
        language: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: "Language is required." },
                notEmpty: { msg: "Language cannot be empty." },
                isAlpha: { msg: "Language must contain only letters." },
                len: {
                    args: [2, 50],
                    msg: "Language must be between 2 and 50 characters.",
                },
            },
        },
    },
    {
        tableName: "communications",
        indexes: [
            { fields: ["sentAt"] },
            { fields: ["status"] },
        ],
    },
)
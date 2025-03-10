import { sequelize } from "../config/sequelize.js"
import { DataTypes } from "sequelize";

export const Notification = sequelize.define(
    "Notification",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        //   user_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //   },
        notificationType: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: "Notification Type cannot be empty." },
                len: { args: [3, 100], msg: "Notification Type must be between 3 and 100 characters." },
                isAlpha: { msg: "Notification Type should contain only letters." },
            },
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: { msg: "Content cannot be empty." },
                len: { args: [5, 1000], msg: "Content must be between 5 and 1000 characters." },
            },
        },
        isRead: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            validate: {
                notNull: { msg: "isRead status is required." },
                isIn: { args: [[true, false]], msg: "isRead must be either true or false." },
            },
        },
        actionUrl: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: "Action URL cannot be empty." },
                isUrl: { msg: "Action URL must be a valid URL." },
            },
        },
        expiryDate: {
            type: DataTypes.DATE,
            allowNull: false,
            alidate: {
                notNull: { msg: "Expiry Date is required." },
                isDate: { msg: "Expiry Date must be a valid date." },
                isAfter: {
                    args: new Date().toISOString(), // Ensures the expiry date is in the future
                    msg: "Expiry Date must be in the future.",
                },
            },
        },
    },
    {
        tableName: "notifications",
        indexes: [
            { fields: ["notificationType"] },
            { fields: ["isRead"] },
            { fields: ["expiryDate"] },
        ],
    },
);
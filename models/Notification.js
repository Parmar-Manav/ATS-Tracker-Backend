import { sequelize } from "../config/sequelize.js"
import { DataTypes } from "sequelize";

export const Notification = sequelize.define(
    "Notification",
    {
        notificationId: {
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
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        isRead: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        actionUrl: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        expiryDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
    {
        tableName: "notifications",
    },
);
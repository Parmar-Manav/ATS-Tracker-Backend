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
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        sentAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        language: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: "communications",
    },
)
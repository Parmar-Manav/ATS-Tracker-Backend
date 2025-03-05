import { sequelize } from "../config/sequelize.js"
import { DataTypes } from "sequelize";

export const UserActivity = sequelize.define(
    "UserActivity",
    {
        activityId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        // user_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },
        activityType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
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
        tableName: "user_activities",
    },
);
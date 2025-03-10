import { sequelize } from "../config/sequelize.js"
import { DataTypes } from "sequelize";

export const UserActivity = sequelize.define(
    "UserActivity",
    {
        id: {
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
            validate: {
                notNull: { msg: "Activity type is required." },
                notEmpty: { msg: "Activity type cannot be empty." },
                len: { args: [3, 50], msg: "Activity type must be between 3 and 50 characters." },
                isAlpha: { msg: "Activity type should contain only letters." }, 
            },
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: "Description is required." },
                notEmpty: { msg: "Description cannot be empty." },
                len: { args: [3, 255], msg: "Description must be between 3 and 255 characters." },
            },
        },
        ipAddress: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: "IP address is required." },
                notEmpty: { msg: "IP address cannot be empty." },
                isIP: { msg: "IP address must be a valid format." },
            },
        },
        userAgent: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: "User agent is required." },
                notEmpty: { msg: "User agent cannot be empty." },
                len: { args: [3, 255], msg: "User agent must be between 3 and 255 characters." },
            },
        },
    },
    {
        tableName: "user_activities",
    },
);
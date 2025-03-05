import { sequelize } from "../config/sequelize.js"
import { DataTypes } from "sequelize";

export const Calendar = sequelize.define(
    "Calendar",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        eventType: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        startTime:{
            type: DataTypes.DATE,
            allowNull:false,
        },
        endTime: {
            type: DataTypes.DATE,
            allowNull:false,
        },
        location: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        attendees: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        reminders: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        status: {
            type: DataTypes.STRING,
            allowNull:false,
        },
    },
    {
        tableName: "calendars",
    },
);
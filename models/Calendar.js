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
            allowNull: false,
            validate: {
                notEmpty: { msg: "Event type cannot be empty." },
                len: { args: [3, 255], msg: "Event type must be between 3 and 255 characters." },
            },
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: "Title cannot be empty." },
                len: { args: [3, 255], msg: "Title must be between 3 and 255 characters." },
            },
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: "Description cannot be empty." },
                len: { args: [3, 500], msg: "Description must be between 3 and 500 characters." },
            },
        },
        startTime: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                isDate: { msg: "Start time must be a valid date." },
                notNull: { msg: "Start time is required." },
                isBeforeEndTime(value) {
                    if (this.endTime && new Date(value) >= new Date(this.endTime)) {
                        throw new Error("Start time must be before end time.");
                    }
                },
            },
        },
        endTime: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                isDate: { msg: "End time must be a valid date." },
                notNull: { msg: "End time is required." },
            },
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: "Location cannot be empty." },
                len: { args: [3, 255], msg: "Location must be between 3 and 255 characters." },
            },
        },
        attendees: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: "Attendees cannot be empty." },
                len: { args: [3, 500], msg: "Attendees must be between 3 and 500 characters." },
            },
        },
        reminders: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: "Reminders cannot be empty." },
                len: { args: [3, 500], msg: "Reminders must be between 3 and 500 characters." },
            },
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: "Status cannot be empty." },
                isIn: {
                    args: [["Scheduled", "Completed", "Cancelled"]],
                    msg: "Status must be one of: Scheduled, Completed, or Cancelled.",
                },
            },
        },
    },
    {
        tableName: "calendars",
        indexes: [
            { fields: ["startTime"] },
            { fields: ["endTime"] },
            { fields: ["status"] },
        ],
    },
);
import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js"

export const Interview = sequelize.define(
    "Interview",
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
        interviewDate: {
            type: DataTypes.DATE,
            allowNull: false,commentvalidate: {
                notNull: { msg: "Interview type is required." },
                notEmpty: { msg: "Interview type cannot be empty." },
                isIn: {
                    args: [["Technical", "HR", "Managerial", "Final"]],
                    msg: "Interview type must be one of: Technical, HR, Managerial, Final.",
                },
            },
        },
        interviewType: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: "Interview type is required." },
                notEmpty: { msg: "Interview type cannot be empty." },
                isIn: {
                    args: [["Technical", "HR", "Managerial", "Final"]],
                    msg: "Interview type must be one of: Technical, HR, Managerial, Final.",
                },
            },
        },
        // interviewerId: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: "Status is required." },
                notEmpty: { msg: "Status cannot be empty." },
                isIn: {
                    args: [["Scheduled", "Completed", "Cancelled", "Rescheduled"]],
                    msg: "Status must be one of: Scheduled, Completed, Cancelled, Rescheduled.",
                },
            },
        },
    },
    {
        tableName: "interviews",
        indexes: [
            { fields: ["interviewDate"] }, // Index for optimized date queries
            { fields: ["status"] }, // Index for faster filtering by status
        ],
    },
)
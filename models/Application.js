import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js"

export const Application = sequelize.define(
    "Application",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        // applicantId: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },
        // jobId: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },
        // teamMemberId: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },
        applyDate: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notNull: { msg: "Apply date is required." },
                isDate: { msg: "Apply date must be a valid date." },
                isBefore: {
                    args: new Date().toISOString(),
                    msg: "Apply date cannot be in the future.",
                },
            },
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: "Status is required." },
                notEmpty: { msg: "Status cannot be empty." },
                len: { args: [3, 50], msg: "Status must be between 3 and 50 characters." },
                isIn: {
                    args: [["Pending", "Accepted", "Rejected", "In Progress"]],
                    msg: "Status must be one of 'Pending', 'Accepted', 'Rejected', or 'In Progress'.",
                },
            },
        },
        currentStage: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: "Current stage is required." },
                notEmpty: { msg: "Current stage cannot be empty." },
                len: { args: [3, 50], msg: "Current stage must be between 3 and 50 characters." },
            },
        },
        // workflowId: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },
    },
    {
        tableName: "applications",
        indexes: [
            { fields: ["applyDate"] },
            { fields: ["status"] },
        ],
    },
)
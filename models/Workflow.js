import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js"

export const Workflow = sequelize.define(
    "Workflow",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        stageName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: "Stage name is required." },
                notEmpty: { msg: "Stage name cannot be empty." },
                len: { args: [3, 100], msg: "Stage name must be between 3 and 100 characters." },
                is: {
                    args: /^[a-zA-Z0-9\s\-]+$/i,
                    msg: "Stage name can only contain letters, numbers, spaces, and hyphens.",
                },
            },
        },
        order: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: { msg: "Order is required." },
                isInt: { msg: "Order must be an integer." },
                min: { args: [1], msg: "Order must be at least 1." },
            },
        },
        requirements: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: "Requirements are required." },
                notEmpty: { msg: "Requirements cannot be empty." },
                len: { args: [3, 255], msg: "Requirements must be between 3 and 255 characters." },
            },
        }

    },
    {
        tableName: "workflows",
    },
)
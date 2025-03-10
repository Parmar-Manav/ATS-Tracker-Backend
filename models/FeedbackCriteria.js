import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js"

export const FeedbackCriteria = sequelize.define(
    "FeedbackCriteria",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        // feedbackId: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },
        criteria: {
            type: DataTypes.STRING,
            allowNull: false,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Criteria is required.",
                },
                notEmpty: {
                    msg: "Criteria cannot be an empty string.",
                },
                len: {
                    args: [3, 255],
                    msg: "Criteria must be between 3 and 255 characters long.",
                },
            },
        },
        score: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Score is required.",
                },
                isFloat: {
                    msg: "Score must be a floating-point number.",
                },
                min: {
                    args: [0],
                    msg: "Score must be at least 0.",
                },
                max: {
                    args: [10],
                    msg: "Score cannot be greater than 10.",
                },
            },
        },
    },
    {
        tableName: "feedback_criteria",
    },
)
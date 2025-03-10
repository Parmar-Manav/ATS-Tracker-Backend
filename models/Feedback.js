import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js"

export const Feedback = sequelize.define(
    "Feedback",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        // interviewId: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },
        // teamMemberId: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },
        comments: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Comments are required.",
                },
                notEmpty: {
                    msg: "Comments cannot be empty.",
                },
                len: {
                    args: [5, 2000], // Minimum 5 and maximum 2000 characters
                    msg: "Comments must be between 5 and 2000 characters.",
                },
            },
        },
        rating: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Rating is required.",
                },
                isFloat: {
                    msg: "Rating must be a number.",
                },
                min: {
                    args: [0],
                    msg: "Rating must be at least 0.",
                },
                max: {
                    args: [5],
                    msg: "Rating cannot be more than 5.",
                },
            },
        },
    },
    {
        tableName: "feedback",
    },
)
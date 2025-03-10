import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js"
export const InterviewNote = sequelize.define(
    "InterviewNote",
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
        notes: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Notes cannot be null.",
                },
                notEmpty: {
                    msg: "Notes cannot be empty.",
                },
                len: {
                    args: [5, 5000], // Ensures notes have at least 5 characters and a maximum of 5000
                    msg: "Notes must be between 5 and 5000 characters.",
                },
            },
        },
    },
    {
        tableName: "interview_notes",
    },
)
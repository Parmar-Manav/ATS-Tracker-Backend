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
        },
    },
    {
        tableName: "interview_notes",
    },
)
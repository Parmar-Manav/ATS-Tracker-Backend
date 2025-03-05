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
        },
        score: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    },
    {
        tableName: "feedback_criteria",
    },
)
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
        },
        rating: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    },
    {
        tableName: "feedback",
    },
)
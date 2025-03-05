import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js"
export const Score = sequelize.define(
    "Score",
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
        overallScore: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    },
    {
        tableName: "scores",
    },
)
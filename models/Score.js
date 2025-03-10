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
            validate: {
                notNull: {
                    msg: "Overall score is required.",
                },
                isFloat: {
                    msg: "Overall score must be a floating-point number.",
                },
                min: {
                    args: [0],
                    msg: "Overall score cannot be negative.",
                },
                max: {
                    args: [100],
                    msg: "Overall score must be at most 100.",
                },
            },
        },
    },
    {
        tableName: "scores",
    },
)
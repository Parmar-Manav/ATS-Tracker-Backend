import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js"

export const ScoreDetail = sequelize.define(
    "ScoreDetail",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        // scoreId: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        score: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    },
    {
        tableName: "score_details",
    },
)
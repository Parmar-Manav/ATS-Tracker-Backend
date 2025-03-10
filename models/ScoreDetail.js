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
            validate: {
                notNull: {
                    msg: "Category is required.",
                },
                notEmpty: {
                    msg: "Category cannot be empty.",
                },
                len: {
                    args: [3, 255],
                    msg: "Category must be between 3 and 255 characters.",
                },
                isAlpha: {
                    msg: "Category must contain only letters.",
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
                    msg: "Score must be a non-negative number.",
                },
                max: {
                    args: [100],
                    msg: "Score must not exceed 100.",
                },
            },
        },
    },
    {
        tableName: "score_details",
    },
)
import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js"

export const Skill = sequelize.define(
    "Skill",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        skillName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Skill name is required.",
                },
                notEmpty: {
                    msg: "Skill name cannot be empty.",
                },
                len: {
                    args: [2, 100],
                    msg: "Skill name must be between 2 and 100 characters.",
                },
            },
        },
        skillCategory: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Skill category is required.",
                },
                notEmpty: {
                    msg: "Skill category cannot be empty.",
                },
                len: {
                    args: [2, 100],
                    msg: "Skill category must be between 2 and 100 characters.",
                },
            },
        },
        weight: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Weight is required.",
                },
                isFloat: {
                    msg: "Weight must be a float number.",
                },
                min: {
                    args: [0],
                    msg: "Weight must be at least 0.",
                },
                max: {
                    args: [1],
                    msg: "Weight must be at most 1.",
                },
            },
        },
    },
    {
        tableName: "skills",
        indexes: [
            { fields: ["skillName"] },
            { fields: ["skillCategory"] },
        ],
    },
)
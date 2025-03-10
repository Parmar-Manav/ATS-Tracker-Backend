import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js"

export const JobSkill = sequelize.define(
    "JobSkill",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        // jobId: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },
        // skillId: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },
        importanceLevel: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Importance level is required.",
                },
                isInt: {
                    msg: "Importance level must be an integer.",
                },
                min: {
                    args: [1],
                    msg: "Importance level must be at least 1.",
                },
                max: {
                    args: [10],
                    msg: "Importance level must be at most 10.",
                },
            },
        },
    },
    {
        tableName: "job_skills",
    },
)
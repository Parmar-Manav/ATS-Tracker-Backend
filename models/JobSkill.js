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
        },
    },
    {
        tableName: "job_skills",
    },
)
import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js"

export const JobPreference = sequelize.define(
    "JobPreference",
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
        preferenceType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        preferenceValue: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: "job_preferences",
    },
)
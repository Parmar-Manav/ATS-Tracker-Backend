import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js"
export const Job = sequelize.define(
    "Job",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        // clientId: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        department: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        postingDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        locationType: {
            type: DataTypes.STRING,
        },
        salaryRangeMin: {
            type: DataTypes.INTEGER,
        },
        salaryRangeMax: {
            type: DataTypes.INTEGER,
        },
    },
    {
        tableName: "jobs",
    },
)
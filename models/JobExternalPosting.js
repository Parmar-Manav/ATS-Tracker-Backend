import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js"
export const JobExternalPosting = sequelize.define(
    "JobExternalPosting",
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
        platform: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        postingUrl: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: "job_external_postings",
    },
)
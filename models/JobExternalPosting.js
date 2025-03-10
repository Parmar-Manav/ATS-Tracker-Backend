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
            validate: {
                notNull: {
                    msg: "Platform is required.",
                },
                notEmpty: {
                    msg: "Platform cannot be empty.",
                },
                len: {
                    args: [2, 255],
                    msg: "Platform name must be between 2 and 255 characters.",
                },
                isAlpha: {
                    msg: "Platform should only contain letters (no numbers or symbols).",
                },
            },
        },
        postingUrl: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Posting URL is required.",
                },
                notEmpty: {
                    msg: "Posting URL cannot be empty.",
                },
                isUrl: {
                    msg: "Posting URL must be a valid URL.",
                },
            },
        },
    },
    {
        tableName: "job_external_postings",
        indexes: [
            { fields: ["platform"] },
            { fields: ["postingUrl"], unique: true }, // Ensures unique job postings
        ],
    },
)
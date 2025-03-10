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
            validate: {
                notNull: {
                    msg: "Preference type is required.",
                },
                notEmpty: {
                    msg: "Preference type cannot be empty.",
                },
                len: {
                    args: [3, 100],
                    msg: "Preference type must be between 3 and 100 characters.",
                },
                isAlpha: {
                    msg: "Preference type must contain only letters.",
                },
            },
        },
        preferenceValue: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Preference value is required.",
                },
                notEmpty: {
                    msg: "Preference value cannot be empty.",
                },
                len: {
                    args: [1, 255],
                    msg: "Preference value must be between 1 and 255 characters.",
                },
            },
        },
    },
    {
        tableName: "job_preferences",
    },
)
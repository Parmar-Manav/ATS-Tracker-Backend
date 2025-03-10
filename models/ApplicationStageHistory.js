import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js"

export const ApplicationStageHistory = sequelize.define(
    "ApplicationStageHistory",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        // applicationId: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },
        stage: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Stage is required.",
                },
                notEmpty: {
                    msg: "Stage cannot be an empty string.",
                },
                len: {
                    args: [3, 100],
                    msg: "Stage must be between 3 and 100 characters long.",
                },
                isAlpha: {
                    msg: "Stage must contain only letters.",
                },
            },
        },
        timestamp: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false,
            validate: {
                isDate: {
                    msg: "Timestamp must be a valid date.",
                },
                isBefore: {
                    args: new Date().toISOString(),
                    msg: "Timestamp cannot be in the future.",
                },
            },
        },
    },
    {
        tableName: "application_stage_history",
    },
)

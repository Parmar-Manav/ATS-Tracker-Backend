import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js"

export const Interview = sequelize.define(
    "Interview",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        // applicationId: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },
        interviewDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        interviewType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // interviewerId: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: "interviews",
    },
)
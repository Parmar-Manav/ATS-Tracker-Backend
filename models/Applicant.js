import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js"

export const Applicant = sequelize.define(
    "Applicant",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        phone: DataTypes.STRING,
        preferences: DataTypes.TEXT,
        portalAccess: {
            type: DataTypes.STRING,
        },
        languagePreference: {
            type: DataTypes.STRING,
        },
    },
    {
        tableName: "applicants",
    },
)
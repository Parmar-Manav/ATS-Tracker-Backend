import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js"

export const Client = sequelize.define(
    "Client",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        clientName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        industry: DataTypes.STRING,
        location: DataTypes.STRING,
        contactPerson: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        contactEmail: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        contactPhone: {
            type: DataTypes.STRING,
        },
        complianceSettings: {
            type: DataTypes.TEXT,
        },
    },
    {
        tableName: "clients",
    },
)
import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js"

export const ClientExecutive = sequelize.define(
    "ClientExecutive",
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
        firstName: {
            type: DataTypes.STRING,
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
        department: DataTypes.STRING,
    },
    {
        tableName: "client_executives",
    },
)
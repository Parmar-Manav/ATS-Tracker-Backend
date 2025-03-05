import { sequelize } from "../config/sequelize.js"
import { DataTypes } from "sequelize";

export const EmailTemplate = sequelize.define(
    "EmailTemplate",
    {
        templateId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        //   clientId: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //   },
        templateName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        subject: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        variables: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        // createdBy: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },
        // lastmodifiedBy: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },
    },
    {
        tableName: "email_templates",
    }
);
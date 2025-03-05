import { sequelize } from "../config/sequelize.js"
import { DataTypes } from "sequelize";

export const Report = sequelize.define(
    "Report",
    {
        reportId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        // client_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },
        reportName: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull:false,
        },
        query: {
            type: DataTypes.TEXT,
            allowNull:false,
        },
        parameters: {
            type: DataTypes.TEXT,
            allowNull:false,
        },
        schedule: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        lastrunDate: {
            type: DataTypes.DATE,
            allowNull:false,
        },
        // createdBy: {
        //     type: DataTypes.STRING,
        //     allowNull:false,
        // },
        // lastmodifiedBy: {
        //     type: DataTypes.STRING,
        //     allowNull:false,
        // },
    },
    {
        tableName: "reports",
    },
);
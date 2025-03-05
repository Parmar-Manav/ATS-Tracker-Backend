import { sequelize } from "../config/sequelize.js"
import { DataTypes } from "sequelize";

export const Analytics = sequelize.define(
    "Analytics",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        metricName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        metricData: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        calculationDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        entityType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // entityId: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },
    },
    {
        tableName: "analytics",
    }
)
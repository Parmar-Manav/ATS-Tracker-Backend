import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js"

export const Workflow = sequelize.define(
    "Workflow",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        stageName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        order: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        requirements: {
            type: DataTypes.STRING,
            allowNull: false,
        }

    },
    {
        tableName: "workflows",
    },
)
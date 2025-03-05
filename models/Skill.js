import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js"

export const Skill = sequelize.define(
    "Skill",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        skillName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        skillCategory: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        weight: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    },
    {
        tableName: "skills",
    },
)
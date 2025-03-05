import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js"

export const ResumeSection = sequelize.define(
    "ResumeSection",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        // documentId: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },
        sectionType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sectionContent: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        mlRelevanceScore: {
            type: DataTypes.FLOAT,
        },
    },
    {
        tableName: "resume_sections",
    },
)
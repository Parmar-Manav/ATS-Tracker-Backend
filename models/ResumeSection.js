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
            validate: {
                notNull: { msg: "Section type is required." },
                notEmpty: { msg: "Section type cannot be empty." },
                len: { args: [3, 50], msg: "Section type must be between 3 and 50 characters." },
                isAlpha: { msg: "Section type must contain only letters." }, // Ensures only alphabetic characters
            },
        },
        sectionContent: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notNull: { msg: "Section content is required." },
                notEmpty: { msg: "Section content cannot be empty." },
                len: { args: [10, 5000], msg: "Section content must be between 10 and 5000 characters." },
            },
        },
        mlRelevanceScore: {
            type: DataTypes.FLOAT,
            validate: {
                isFloat: { msg: "ML relevance score must be a floating-point number." },
                min: { args: [0], msg: "ML relevance score cannot be negative." },
                max: { args: [1], msg: "ML relevance score cannot be greater than 1." },
            },
        },
    },
    {
        tableName: "resume_sections",
    },
)
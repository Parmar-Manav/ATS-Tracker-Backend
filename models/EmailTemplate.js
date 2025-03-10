import { sequelize } from "../config/sequelize.js"
import { DataTypes } from "sequelize";

export const EmailTemplate = sequelize.define(
    "EmailTemplate",
    {
        id: {
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
            validate: {
                notNull: { msg: "Template name is required." },
                notEmpty: { msg: "Template name cannot be empty." },
                len: { args: [3, 255], msg: "Template name must be between 3 and 255 characters." },
            },
        },
        subject: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: "Email subject is required." },
                notEmpty: { msg: "Email subject cannot be empty." },
                len: { args: [3, 255], msg: "Subject must be between 3 and 255 characters." },
            },
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notNull: { msg: "Email body is required." },
                notEmpty: { msg: "Email body cannot be empty." },
            },
        },
        variables: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notNull: { msg: "Variables field is required." },
                notEmpty: { msg: "Variables field cannot be empty." },
                isJSON(value) {
                    try {
                        JSON.parse(value); // Ensure it's valid JSON
                    } catch (e) {
                        throw new Error("Variables must be a valid JSON string.");
                    }
                },
            },
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            validate: {
                notNull: { msg: "isActive field is required." },
                isIn: { args: [[true, false]], msg: "isActive must be either true or false." },
            },
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
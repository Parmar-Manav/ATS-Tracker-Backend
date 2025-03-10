import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js"

export const Document = sequelize.define(
    "Document",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        // applicantId: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },
        filePath: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "File path is required.",
                },
                notEmpty: {
                    msg: "File path cannot be empty.",
                },
                isUrl: {
                    msg: "File path must be a valid URL or file path.",
                },
            },
        },
        docType: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Document type is required.",
                },
                notEmpty: {
                    msg: "Document type cannot be empty.",
                },
                isIn: {
                    args: [["Resume", "Cover Letter", "ID Proof", "Certificate", "Other"]],
                    msg: "Invalid document type. Allowed values: Resume, Cover Letter, ID Proof, Certificate, Other.",
                },
            },
        },
        uploadDate: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Upload date is required.",
                },
                isDate: {
                    msg: "Upload date must be a valid date.",
                },
                isBefore: {
                    args: new Date().toISOString(),
                    msg: "Upload date cannot be in the future.",
                },
            },
        },
    },
    {
        tableName: "documents",
    },
)
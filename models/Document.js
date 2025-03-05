import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js"

export const Document = sequelize.define(
    "Document",
    {
        documentId: {
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
        },
        docType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        uploadDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
    {
        tableName: "documents",
    },
)
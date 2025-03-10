import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js"

export const DocumentContent = sequelize.define(
    "DocumentContent",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        // documentId: {
        //     type: DataTypes.INTEGER,
        //     primaryKey: true,
        // },
        fullContent: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Full content is required.",
                },
                notEmpty: {
                    msg: "Full content cannot be empty.",
                },
                len: {
                    args: [10, 10000], // Set a reasonable length limit
                    msg: "Full content must be between 10 and 10,000 characters.",
                },
            },
        },
        parsedData: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Parsed data is required.",
                },
                notEmpty: {
                    msg: "Parsed data cannot be empty.",
                },
                len: {
                    args: [10, 5000], // Limit parsed data size
                    msg: "Parsed data must be between 10 and 5,000 characters.",
                },
            },
        },
    },
    {
        tableName: "document_contents",
    },
)
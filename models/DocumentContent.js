import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js"

export const DocumentContent = sequelize.define(
    "DocumentContent",
    {
        id:{
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
        },
        parsedData: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        tableName: "document_contents",
    },
)
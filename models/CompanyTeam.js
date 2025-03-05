import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js"

export const CompanyTeam = sequelize.define(
    "CompanyTeam",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        teamName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // clientId: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },
    },
    {
        tableName: "company_teams",
    },
)
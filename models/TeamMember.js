import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js"

export const TeamMember = sequelize.define(
    "TeamMember",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        // companyTeamId: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        department: DataTypes.STRING,
        role: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: "team_members",
    },
)
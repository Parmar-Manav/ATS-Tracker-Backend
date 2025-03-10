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
            validate: {
                notNull: {
                    msg: "Team name is required.",
                },
                notEmpty: {
                    msg: "Team name cannot be empty.",
                },
                len: {
                    args: [3, 100], // Ensures length is between 3 and 100 characters
                    msg: "Team name must be between 3 and 100 characters.",
                },
                is: {
                    args: /^[a-zA-Z0-9\s\-]+$/i, // Allows letters, numbers, spaces, and hyphens
                    msg: "Team name can only contain letters, numbers, spaces, and hyphens.",
                },
            },
        },
        // clientId: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },
    },
    {
        tableName: "company_teams",
        indexes: [
            { fields: ["teamName"], unique: true }, // Ensures team names are unique
        ],
    },
)
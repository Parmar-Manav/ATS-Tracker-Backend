import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js"
export const TeamMemberPermission = sequelize.define(
    "TeamMemberPermission",
    {
        teamMemberId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        permission: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
    },
    {
        tableName: "team_member_permissions",
    },
)
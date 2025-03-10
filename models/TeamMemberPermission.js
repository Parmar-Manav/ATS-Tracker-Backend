import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js"
export const TeamMemberPermission = sequelize.define(
    "TeamMemberPermission",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        permission: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Permission is required.",
                },
                notEmpty: {
                    msg: "Permission cannot be an empty string.",
                },
                len: {
                    args: [3, 255],
                    msg: "Permission must be between 3 and 255 characters.",
                },
                isAlpha: {
                    msg: "Permission should only contain letters.",
                },
            },
        },
    },
    {
        tableName: "team_member_permissions",
    },
)
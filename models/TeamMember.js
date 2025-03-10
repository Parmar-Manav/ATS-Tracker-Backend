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
            validate: {
                notNull: { msg: "First name is required." },
                notEmpty: { msg: "First name cannot be empty." },
                len: { args: [2, 50], msg: "First name must be between 2 and 50 characters." },
                isAlpha: { msg: "First name can only contain letters." },
            },
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: "Last name is required." },
                notEmpty: { msg: "Last name cannot be empty." },
                len: { args: [2, 50], msg: "Last name must be between 2 and 50 characters." },
                isAlpha: { msg: "Last name can only contain letters." },
            },
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notNull: { msg: "Email is required." },
                notEmpty: { msg: "Email cannot be empty." },
                isEmail: { msg: "Invalid email format." },
            },
        },
        department: {
            type: DataTypes.STRING,
            validate: {
                len: { args: [2, 100], msg: "Department name must be between 2 and 100 characters." },
            },
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: "Role is required." },
                notEmpty: { msg: "Role cannot be empty." },
                isIn: {
                    args: [["Admin", "Manager", "HR", "Recruiter", "Employee"]],
                    msg: "Role must be one of: Admin, Manager, HR, Recruiter, Employee.",
                },
            },
        },
    },
    {
        tableName: "team_members",
        indexes: [{ fields: ["email"], unique: true }], // Index on email for faster lookups
    },
)
import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js"

export const ClientExecutive = sequelize.define(
    "ClientExecutive",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        // clientId: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },
        firstName: {
            type: DataTypes.STRING,
            allowNull:false,
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
                isEmail: { msg: "Must be a valid email address." },
                len: { args: [5, 255], msg: "Email must be between 5 and 255 characters." },
            },
        },
        department: {
            type: DataTypes.STRING,
            validate: {
                len: { args: [2, 100], msg: "Department must be between 2 and 100 characters." },
                isAlpha: {
                    args: true,
                    msg: "Department name should contain only letters.",
                },
            },
        },
    },
    {
        tableName: "client_executives",
    },
)
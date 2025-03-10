import { sequelize } from "../config/sequelize.js"
import { DataTypes } from "sequelize";

export const User = sequelize.define(
    "User",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        userName: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Username is required.",
                },
                notEmpty: {
                    msg: "Username cannot be empty.",
                },
                len: {
                    args: [3, 50],
                    msg: "Username must be between 3 and 50 characters.",
                },
                isAlphanumeric: {
                    msg: "Username must only contain letters and numbers.",
                },
            },
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Email is required.",
                },
                notEmpty: {
                    msg: "Email cannot be empty.",
                },
                isEmail: {
                    msg: "Must be a valid email address.",
                },
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Password is required.",
                },
                notEmpty: {
                    msg: "Password cannot be empty.",
                },
                len: {
                    args: [8, 100],
                    msg: "Password must be at least 8 characters long.",
                },
                isStrongPassword(value) {
                    if (!/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])/.test(value)) {
                        throw new Error(
                            "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character."
                        );
                    }
                },
            },
        },
    },
    {
        tableName: "users",
    },
);
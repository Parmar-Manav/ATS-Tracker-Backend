import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js"

export const Applicant = sequelize.define(
    "Applicant",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true, // Ensures it's not an empty string
                len: [2, 50], // Minimum 2 characters, maximum 50
                isAlpha: true, // Ensures only letters (no numbers or symbols)
            },
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                len: [2, 50],
                isAlpha: true,
            },
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: true,
                isEmail: true, // Ensures valid email format
            },
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isNumeric: true, // Ensures only numbers
                len: [10, 15], // Ensures phone number is between 10 and 15 digits
            },
        },
        preferences: {
            type: DataTypes.TEXT,
            validate: {
                notEmpty: false, // Optional field but cannot be empty if provided
                len: [0, 500], // Restrict text length (0 allows it to be null)
            },
        },
        portalAccess: {
            type: DataTypes.ENUM("Admin", "User", "Guest"),
            allowNull: false,
        },
        status: {
            type: DataTypes.ENUM("Applied", "Interview", "Offer", "Rejected"), // Updated statuses
            allowNull: false,
            defaultValue: "Applied", // Default status when a new applicant is created
        },
        languagePreference: {
            type: DataTypes.STRING,
            validate: {
                isIn: [["English", "Hindi"]], // Restrict values
            },
        },
    },
    {
        tableName: "applicants",
        indexes: [
            { fields: ["email"], unique: true }, // Ensure uniqueness at DB level
        ],
    },
)
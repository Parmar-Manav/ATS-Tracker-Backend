import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js"
export const Job = sequelize.define(
    "Job",
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
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: "Job title is required." },
                len: { args: [3, 255], msg: "Title must be between 3 and 255 characters." },
            },
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: { msg: "Job description is required." },
                len: { args: [10, 5000], msg: "Description must be between 10 and 5000 characters." },
            },
        },
        department: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: "Department is required." },
                len: { args: [3, 100], msg: "Department name must be between 3 and 100 characters." },
            },
        },
        postingDate: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                isDate: { msg: "Posting date must be a valid date." },
                isBefore: { args: [new Date().toISOString()], msg: "Posting date cannot be in the future." },
            },
        },
        locationType: {
            type: DataTypes.STRING,
            allowNull:false,
            validate: {
                isIn: { 
                    args: [["Remote", "Onsite", "Hybrid"]], 
                    msg: "Location type must be one of: 'Remote', 'Onsite', or 'Hybrid'." 
                },
            },
        },
        salaryRangeMin: {
            type: DataTypes.INTEGER,
            allowNull:false,
            validate: {
                isInt: { msg: "Minimum salary must be an integer." },
                min: { args: [0], msg: "Minimum salary cannot be negative." },
                isValidSalary(value) {
                    if (this.salaryRangeMax !== null && value > this.salaryRangeMax) {
                        throw new Error("Minimum salary cannot be greater than maximum salary.");
                    }
                },
            },
        },
        salaryRangeMax: {
            type: DataTypes.INTEGER,
            validate: {
                isInt: { msg: "Maximum salary must be an integer." },
                min: { args: [0], msg: "Maximum salary cannot be negative." },
            },
        },
    },
    {
        tableName: "jobs",
        indexes: [
            { fields: ["postingDate"] },
            { fields: ["title"] },
            { fields: ["department"] },
        ],
    },
)
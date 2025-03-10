import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js"

export const Onboarding = sequelize.define(
    "Onboarding",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        // applicantId: { 
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },
        // applicationId: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     unique: true,
        // },
        // onboardingTemplateId: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },
        startDate: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notNull: { msg: "Start date is required." },
                isDate: { msg: "Start date must be a valid date." },
            },
        },
        expectedCompletionDate: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notNull: { msg: "Expected completion date is required." },
                isDate: { msg: "Expected completion date must be a valid date." },
                isAfterStartDate(value) {
                    if (this.startDate && value <= this.startDate) {
                        throw new Error("Expected completion date must be after the start date.");
                    }
                },
            },
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: "Status is required." },
                notEmpty: { msg: "Status cannot be empty." },
                isIn: {
                    args: [["Pending", "In Progress", "Completed", "Cancelled"]],
                    msg: "Status must be one of: Pending, In Progress, Completed, or Cancelled.",
                },
            },
        },
        // assignedBuddyId: {
        //     type: DataTypes.INTEGER,
        // },
    },
    {
        tableName: "onboardings",
        indexes: [
            { fields: ["startDate"] },
            { fields: ["expectedCompletionDate"] },
            { fields: ["status"] },
        ],
    },
)
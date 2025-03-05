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
        },
        expectedCompletionDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // assignedBuddyId: {
        //     type: DataTypes.INTEGER,
        // },
    },
    {
        tableName: "onboardings",
    },
)
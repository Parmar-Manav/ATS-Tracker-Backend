import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js"

export const ApplicantSkill = sequelize.define(
    "ApplicantSkill",
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
        // skillId: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },
        proficiencyLevel: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Proficiency level is required.",
                },
                isInt: {
                    msg: "Proficiency level must be an integer.",
                },
                min: {
                    args: [1],
                    msg: "Proficiency level must be at least 1.",
                },
                max: {
                    args: [10],
                    msg: "Proficiency level must be at most 10.",
                },
            },
        },
    },
    {
        tableName: "applicant_skills",
        timestamps: true,
    },
)

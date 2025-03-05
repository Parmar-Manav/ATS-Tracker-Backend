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
        },
    },
    {
        tableName: "applicant_skills",
        timestamps: true,
    },
)

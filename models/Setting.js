import { sequelize } from "../config/sequelize.js"
import { DataTypes } from "sequelize";

export const Setting = sequelize.define(
    "Setting",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        //   client_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //   },
        settingKey: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true, // Ensures unique keys
            validate: {
                notNull: {
                    msg: "Setting Key is required.",
                },
                notEmpty: {
                    msg: "Setting Key cannot be empty.",
                },
                len: {
                    args: [3, 100], // Minimum 3, maximum 100 characters
                    msg: "Setting Key must be between 3 and 100 characters long.",
                },
            },
        },
        settingValue: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Setting Value is required.",
                },
                notEmpty: {
                    msg: "Setting Value cannot be empty.",
                },
            },
        },
        settingType: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Setting Type is required.",
                },
                notEmpty: {
                    msg: "Setting Type cannot be empty.",
                },
                isIn: {
                    args: [["string", "number", "boolean", "json"]],
                    msg: "Setting Type must be one of: string, number, boolean, or json.",
                },
            },
        },
        isSystemSetting: {
            type: DataTypes.BOOLEAN,
            allowNull:false,
            validate: {
                notNull: {
                    msg: "isSystemSetting is required.",
                },
                isIn: {
                    args: [[true, false]],
                    msg: "isSystemSetting must be either true or false.",
                },
            },
        },
        // createdBy: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },
        // lastmodifiedBy: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },
    },
    {
        tableName: "settings",
        indexes: [{ fields: ["settingKey"], unique: true }], // Index for faster lookup
    },
);
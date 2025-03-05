import { sequelize } from "../config/sequelize.js"
import { DataTypes } from "sequelize";

export const Setting = sequelize.define(
    "Setting",
    {
        settingId: {
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
        },
        settingValue: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        settingType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isSystemSetting: {
            type: DataTypes.BOOLEAN,
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
    },
);
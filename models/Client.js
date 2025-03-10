import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js"

export const Client = sequelize.define(
    "Client",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        clientName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Client name is required.",
                },
                notEmpty: {
                    msg: "Client name cannot be empty.",
                },
                len: {
                    args: [3, 255],
                    msg: "Client name must be between 3 and 255 characters.",
                },
            },
        },
        industry: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [2, 100],
                    msg: "Industry must be between 2 and 100 characters.",
                },
            },
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [2, 255],
                    msg: "Location must be between 2 and 255 characters.",
                },
            },
        },
        contactPerson: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Contact person is required.",
                },
                notEmpty: {
                    msg: "Contact person cannot be empty.",
                },
                len: {
                    args: [3, 255],
                    msg: "Contact person must be between 3 and 255 characters.",
                },
            },
        },
        contactEmail: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Contact email is required.",
                },
                notEmpty: {
                    msg: "Contact email cannot be empty.",
                },
                isEmail: {
                    msg: "Invalid email format.",
                },
            },
        },
        contactPhone: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: {
                    args: [/^\+?[1-9]\d{1,14}$/], // Supports international phone formats (E.164 standard)
                    msg: "Invalid phone number format.",
                },
            },
        },
        complianceSettings: {
            type: DataTypes.TEXT,
            validate: {
                isValidJSON(value) {
                    if (value) {
                        try {
                            JSON.parse(value);
                        } catch (e) {
                            throw new Error("Compliance settings must be valid JSON.");
                        }
                    }
                },
            },
        },
    },
    {
        tableName: "clients",
        indexes: [
            { fields: ["clientName"] },
            { fields: ["industry"] },
        ],
    },
)
import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js"

export const Referral = sequelize.define(
    "Referral",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      // applicantId: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      // },
      // clientExecutiveId: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      // },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Status is required." },
          notEmpty: { msg: "Status cannot be empty." },
          isIn: {
              args: [["Pending", "Approved", "Rejected", "Paid"]],
              msg: "Status must be one of: Pending, Approved, Rejected, Paid.",
          },
      },
      },
      bonusAmount: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          notNull: { msg: "Bonus amount is required." },
          isFloat: { msg: "Bonus amount must be a valid number." },
          min: { args: [0], msg: "Bonus amount cannot be negative." },
      },
      },
      referralDate: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notNull: { msg: "Referral date is required." },
          isDate: { msg: "Referral date must be a valid date." },
          isBefore: {
              args: new Date().toISOString(),
              msg: "Referral date cannot be in the future.",
          },
      },
      },
    },
    {
      tableName: "referrals",
    },
)
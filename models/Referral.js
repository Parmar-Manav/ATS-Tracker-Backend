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
      },
      bonusAmount: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      referralDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      tableName: "referrals",
    },
)
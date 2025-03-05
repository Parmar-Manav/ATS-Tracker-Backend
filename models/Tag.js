import { sequelize } from "../config/sequelize.js"
import { DataTypes } from "sequelize";

export const Tag = sequelize.define(
    "Tag",
    {
      tagId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    //   clientId: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //   },
      tagName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tagType: DataTypes.STRING,
      color: DataTypes.STRING,
      createdBy: DataTypes.INTEGER,
    },
    {
      tableName: "tags",
    }
  );
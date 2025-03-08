import { Sequelize} from "sequelize"
import dotenv from "dotenv"

dotenv.config()

export const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: "mssql",
  // define : {
  //   onDelete : "NO ACTION"
  // },
  logging: false,
  dialectOptions: {
    options: {
      encrypt: true,
      trustServerCertificate: true,
      debug: {
        packet: true,
        data: true,
        payload: true,
        token: false,
        log: false,
      },
    },
  },
  pool: {
    max: Number.parseInt(process.env.DB_POOL_MAX || "5"),
    min: Number.parseInt(process.env.DB_POOL_MIN || "0"),
    acquire: Number.parseInt(process.env.DB_POOL_ACQUIRE || "30000"),
    idle: Number.parseInt(process.env.DB_POOL_IDLE || "10000"),
  },
})
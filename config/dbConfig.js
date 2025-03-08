import { sequelize } from "./sequelize.js";
import { SetupAssociations } from "./Association.js"

export const dbConnect = async () => {
  return await sequelize.authenticate();
};

export const dbSync = async () => {
  SetupAssociations();
  // return await sequelize.sync({alter:true});
  return await sequelize.sync({ force: false });
};
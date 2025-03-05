// import express from 'express';
// import cors from 'cors';
// import helmet from 'helmet';
// import morgan from 'morgan';
// import dotenv from 'dotenv';
// import { sequelize } from './config/sequelize.js';
// import * as models from './models/index.js';
// import routes from './routes/index.js';
// import { SetupAssociations } from './config/Association.js';
// import  errorHandler  from './middleware/errorHandler.js';
// import { loggerMiddleware } from './middleware/logger.js';
// import rateLimiter from './middleware/rateLimiter.js';

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(cors());
// app.use(helmet());
// app.use(morgan('combined'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(loggerMiddleware);
// app.use(rateLimiter);

// // Apply associations
// SetupAssociations(models);

// app.use('/api', routes);

// app.use(errorHandler);

// const startServer = async () => {
//   try {
//     await sequelize.sync({ force: true });
//     console.log('Database connected and synced');
//     app.listen(PORT, () => {
//       console.log(`Server is running on port ${PORT}`);
//     });
//   } catch (error) {
//     console.error('Unable to start the server:', error);
//     process.exit(1);
//   }
// };

// startServer();

// export default app;
import express from "express"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"
import dotenv from "dotenv"
import { sequelize } from "./config/sequelize.js"
import * as models from "./models/index.js"
// import routes from "./routes/index.js"
import { SetupAssociations } from "./config/Association.js"
import errorHandler from "./middlewares/errorHandler.js"
import { loggerMiddleware } from "./middlewares/logger.js"
import rateLimiter from "./middlewares/rateLimiter.js"
import { dbConnect, dbSync } from "./config/dbConfig.js";


dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(helmet())
app.use(morgan("combined"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(loggerMiddleware)
app.use(rateLimiter)

// Apply associations
// app.use("/api", routes)

app.use(errorHandler)
// const startServer = async () => {
//   try {
//     await sequelize.authenticate()
//     console.log("Database connection has been established successfully.")
//     SetupAssociations()
//     // Sync models one by one
//     await sequelize.sync({ force: true })
//     // for (const modelName in models) {
//     //   if (sequelize.models.hasOwnProperty(modelName)) {
//     //     const model = models[modelName]
//     //     console.log(`Synced model: ${modelName}`)
//     //   }
//     // }

//     console.log("All models have been synchronized.")

//     app.listen(PORT, () => {
//       console.log(`Server is running on port ${PORT}`)
//     })
//   } catch (error) {
//     console.error("Unable to start the server:", error)
//     process.exit(1)
//   }
// }
// startServer()

dbConnect().then(() => {
  console.log("Database connected successfully!!");
  dbSync();
}).then(() => {
  // SetupAssociations();
  console.log("Database synced successfully!!");
  app.listen(PORT), () => {
    console.log("Server is running on port " + PORT);
  }
})

export default app


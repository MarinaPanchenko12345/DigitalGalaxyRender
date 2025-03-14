import chalk from "chalk";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

//Connects to the MongoDB database.
//Depending on the NODE_ENV environment variable, it connects to either a local MongoDB Compass or MongoDB Atlas.
export const connectDB = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log(chalk.yellow.bold("Connected to MongoDB Atlas database"));
  } catch (error) {
    console.log(chalk.red.bold("Error connecting to MongoDB Atlas database"));
    console.log(chalk.red(error));
    process.exit(1);
  }
};
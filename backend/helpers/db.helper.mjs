import chalk from "chalk";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();



//Connects to the MongoDBAtlas database.

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.ATLAS_DB_URL);
    console.log(chalk.yellow.bold("Connected to MongoDB Atlas database"));
  } catch (error) {
    console.log(chalk.red.bold("Error connecting to MongoDB Atlas database"));
    console.log(chalk.red(error));
    process.exit(1);
  }
};
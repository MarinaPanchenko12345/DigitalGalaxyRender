import dotenv from "dotenv";

dotenv.config();

console.log("BACKEND_URL from .env:", process.env.BACKEND_URL);

export const FRONTEND_URL = process.env.FRONTEND_URL;
export const BACKEND_URL = process.env.BACKEND_URL;


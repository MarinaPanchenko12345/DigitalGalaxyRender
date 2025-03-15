import dotenv from "dotenv";

dotenv.config();

console.log("✅ BACKEND_URL from .env:", process.env.BACKEND_URL);
console.log("✅ FRONTEND_URL from .env:", process.env.FRONTEND_URL);

if (!process.env.FRONTEND_URL) {
  console.error("❌ FRONTEND_URL is missing! Проверь .env в Render.");
}

export const FRONTEND_URL = process.env.FRONTEND_URL;
export const BACKEND_URL = process.env.BACKEND_URL;

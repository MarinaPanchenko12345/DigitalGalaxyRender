import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

//Middleware for CORS.
// It specifies the allowed H5TTP methods and headers for cross-origin requests.
export const corsMiddleware = cors({
  origin: [process.env.FRONTEND_URL],
  credentials: true,
  methods: "GET,PUT,POST,PATCH,DELETE,OPTIONS",
  allowedHeaders: "Content-Type, Accept, Authorization",
  preflightContinue: true,
});

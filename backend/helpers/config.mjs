import dotenv from "dotenv";

dotenv.config();

// ## Environment ##
export const NODE_ENV = process.env.NODE_ENV;
export const PORT = process.env.PORT || 3000;

//## URLs ##
export const BACKEND_URL = process.env.BACKEND_URL;
export const FRONTEND_URL = process.env.FRONTEND_URL;

//## MongoDBAtlas ##
export const ATLAS_DB_URL = process.env.ATLAS_DB_URL;

//## Authentication ##
export const JWT_SECRET = process.env.JWT_SECRET;
export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
export const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

//## Session ##
export const SESSION_SECRET = process.env.SESSION_SECRET;

//## Email ##
export const EMAIL_USER = process.env.EMAIL_USER;
export const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;










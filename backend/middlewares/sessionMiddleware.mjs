import session from "express-session";
import MongoStore from "connect-mongo";
import dotenv from "dotenv";
dotenv.config();

const sessionMiddleware = session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.ATLAS_DB_URL, // Session Storage in MongoDB
    collectionName: "sessions",
  }),
  cookie: {
    secure: process.env.NODE_ENV === "production", // Enable secure in production
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 4,
  },
});

export default sessionMiddleware;

import session from "express-session";
import MongoStore from "connect-mongo";
import dotenv from "dotenv";
import { DB_URL } from '../helpers/db.helper.mjs';

dotenv.config();

const sessionMiddleware = session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: DB_URL, // Хранилище сессий в MongoDB
    collectionName: "sessions",
  }),
  cookie: {
    secure: process.env.NODE_ENV === "production", // Включаем secure в продакшене
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 4,
  },
});

export default sessionMiddleware;

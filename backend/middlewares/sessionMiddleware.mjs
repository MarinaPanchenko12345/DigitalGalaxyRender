import session from "express-session";
import MongoStore from "connect-mongo";
import { DB_URL } from "../helpers/db.helper.mjs";
import { NODE_ENV, SESSION_SECRET } from '../helpers/config.mjs';



const sessionMiddleware = session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: DB_URL, // Хранилище сессий в MongoDB
    collectionName: "sessions",
  }),
  cookie: {
    secure: NODE_ENV === "production", // Включаем secure в продакшене
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 4,
  },
});

export default sessionMiddleware;

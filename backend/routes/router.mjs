import express from "express";
const router = express.Router();

// Import route handlers for cards and users
import auth from "../handlers/auth/routes/auth.mjs";
import cards from "../handlers/cards/routes/cards.mjs";
import users from "../handlers/users/routes/users.mjs";
import cart from "../handlers/cart/routes/cart.mjs";
import order from "../handlers/order/routes/order.mjs";
import authGoogle from "../handlers/authgoogle/routes/authGoogle.mjs";

router.use("/api/auth", auth);
router.use("/api/cards", cards);
router.use("/api/users", users);
router.use("/api/cart", cart);
router.use("/api/order", order);
router.use("/api/", authGoogle);

export default router;

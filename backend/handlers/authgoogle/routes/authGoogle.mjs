import express from "express";
import passport from "passport";

import "../service/passportGoogle.mjs";
import { FRONTEND_URL } from '../../../helpers/config.mjs';

const router = express.Router();
router.use((req, res, next) => {
  console.log("Session data:", req.session);
  next();
});



// Initialize Passport and sessions
router.use(passport.initialize());
router.use(passport.session());

// Route for Google authentication
router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["email", "profile"],
  })
);

// Route for handling the callback after authentication
router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/auth/failure" }),
  (req, res) => {
    const token = req.user?.token || null;// Received token
    if (!FRONTEND_URL) {
      return res
        .status(500)
        .send("FRONTEND_URL is missing. Check environment variables.");
    }
    res.redirect(`${FRONTEND_URL}/auth-success?token=${token}`);
  }
);

// Route to log out and clear session
router.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Error destroying session:", err);
      return res.status(500).send("Error while exiting");
    }
    res.clearCookie("connect.sid");
    res.status(200).send("You have successfully logged out.");
  });
});

export default router;

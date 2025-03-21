import express from "express";
import passport from "passport";
import "../service/passportGoogle.mjs";
import dotenv from "dotenv";
import sessionMiddleware from "../../../middlewares/sessionMiddleware.mjs"
dotenv.config();

const router = express.Router();

// Initialize Passport and sessions
router.use(sessionMiddleware);
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
    const token = req.user.token; // Received token
    console.log("Generated JWT token:", token);
    res.redirect(`${process.env.FRONTEND_URL}/auth-success?token=${token}`);
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

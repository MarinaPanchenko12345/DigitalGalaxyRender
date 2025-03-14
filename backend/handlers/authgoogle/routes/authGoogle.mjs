import express from "express";
import passport from "passport";
import session from "express-session";
import "../service/passportGoogle.mjs";

const router = express.Router();

// Session setup
router.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  })
);

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
    const token = req.user.token; // Received token
    console.log("Generated JWT token:", token);
    const frontendUrl =
      process.env.FRONTEND_URL || "https://digitalgalaxyrender-1.onrender.com"; // ✅ Фолбэк
    console.log("======= Google Auth Callback =======");
    console.log("Generated JWT token:", token || "No token generated");
    console.log("Frontend URL:", frontendUrl);
    console.log(
      "Redirecting to:",
      `${frontendUrl}/auth-success?token=${token}`
    );

    if (!token) {
      return res.status(400).json({ error: "Token not generated" });
    }

    res.redirect(`${frontendUrl}/auth-success?token=${token}`);
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

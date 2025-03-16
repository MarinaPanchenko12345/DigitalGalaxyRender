import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

//Generates a JWT token for the given user.
export const generateToken = (user) => {
  const token = jwt.sign(
    {
      _id: user._id,
      isBusiness: user.isBusiness,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET,
    { expiresIn: "4h" } // Token expiration time (4 hour)
  );
  return token;
};

//Generates a JWT  reset token for the given user.
export const generateResetToken = (user) => {
  const resetToken = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "15m",
  });
  return resetToken;
};
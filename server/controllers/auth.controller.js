import User from "../models/User.model.js";
import bcrypt from "bcrypt";
import { errorHandler } from "../utils/error.js";

export const signUp = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();

    return res.status(201).json({
      data: newUser,
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

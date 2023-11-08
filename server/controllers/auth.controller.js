import User from "../models/User.model.js";
import bcrypt from "bcrypt";

export const signUp = async (req, res) => {
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
    return res.status(500).json({ message: error.message });
  }
};

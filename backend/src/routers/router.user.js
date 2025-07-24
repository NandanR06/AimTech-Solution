import { Router } from "express";
import bcrypt from "bcryptjs"; 
import USER from "../model/model.user.js";
import jwt from "jsonwebtoken";

const userRouter = Router();

// User SignUp
userRouter.post("/signUp", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingEmail = await USER.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: "User Email already exists" });
    }

    const existingUser = await USER.findOne({ name: name });
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new USER({
      name: name,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    res.status(201).json({ message: "User created successfully", user: savedUser });
  } catch (error) {
    console.error("Error in creating user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// User SignIn
userRouter.post("/signIn", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {

      const token = jwt.sign({ email: process.env.ADMIN_EMAIL }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIR });
      res.cookie('token', token, { httpOnly: true, secure: true });

      return res.status(200).json({ admin: true, message: "Admin credentials" });
    }

    const user = await USER.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIR});
      res.cookie('token', token, { httpOnly: true, secure: true });

    res.status(200).json({ message: "User signed in successfully", user });
  } catch (error) {
    console.error("Error in user signIn:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// User SignOut
userRouter.get("/signout", (req, res) => {
  try {
    res.clearCookie('token');
    res.status(200).json({ message: "User signed out successfully" });
  } catch (error) {
    console.error("Error in user signOut:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default userRouter;

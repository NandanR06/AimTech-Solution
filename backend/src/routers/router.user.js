import { Router } from "express";

const userRouter = Router();

userRouter.post("/signUp", (req, res) => {
    res.send('Hello World!');

  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
  } catch (error){
    console.error("Error in  creating user ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default userRouter;

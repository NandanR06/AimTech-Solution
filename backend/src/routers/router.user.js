import { Router } from "express";
import USER from "../model/model.user";

const userRouter = Router();

userRouter.post("/signUp",async (req, res) => {
    res.send('Hello World!');

  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingEmail = await USER.find(email);
    if (existingEmail) {
      return res.status(400).json({ message: "User Email already exists" });
    }

    const existingUser = await USER.find(username);
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }

    

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new USER({
      name: username,
      email: email,
      password: hashedPassword,
    });
    const savedUser = await newUser.save();
    res.status(201).json({ message: "User created successfully", user: savedUser });
  } catch (error){
    console.error("Error in  creating user ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});



userRouter.post("/signIn",async(res,req)=>{
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {

    if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
      return res.status(200).json({ admin: true, message: "Admin credentials" });
    }
    // Check if user exists
    const user = await USER.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    
    res.status(200).json({ message: "User signed in successfully", user });
    
  } catch (error) {
    console.error("Error in user signIn: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
})
export default userRouter;

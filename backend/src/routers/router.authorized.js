import { Router } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
const authorizedRouter = Router();

// Middleware to check if the user is authenticated
authorizedRouter.get("/authorized",(req, res) => {

    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ message: "Unauthorized access" });
        }
       const  decode  = jwt.verify(token, process.env.JWT_SECRET);
        if (!decode) {
            return res.status(401).json({ message: "Invalid token" });
        }
        return res.status(200).json({ message: "Authorized access" });
        
        
    } catch (error) {
        console.error("Error in authorization middleware:", error);
        res.status(500).json({ message: "Internal Server Error" });
        
    }
});
export default authorizedRouter;
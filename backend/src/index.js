import express from "express";
import cors from "cors";
import userRouter from "./routers/router.user.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authorizedRouter from "./routers/router.authorized.js";
import cookieParser from "cookie-parser";
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;


// Set the allowed origin for CORS
const allowedOrigin = process.env.NODE_ENV === 'Development' 
  ? "http://localhost:5173" 
  : "https://aimtech-rbi8.onrender.com"; 


app.use(
  cors({
    origin: allowedOrigin,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    optionsSuccessStatus: 200,
  })
);

app.use(cookieParser());
app.use(express.json());

app.get("/nandan", (req, res) => {
  res.send("Hello World!");
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL, {})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/user", userRouter);
app.use("/auth", authorizedRouter);


// Serve frontend (after your API routes)
app.use(express.static(path.join(__dirname, '../frontend/dist')));


// try {
//   app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
//   });
// } catch (err) {
//   console.error("Catch-all route failed:", err);
// }


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

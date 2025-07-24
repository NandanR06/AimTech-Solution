import express from 'express';
import cors from 'cors';
import userRouter from "./routers/router.user.js";
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authorizedRouter from './routers/router.authorized.js';
import cookieParser from 'cookie-parser'; 

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const allowedOrigins = ['https://aimtech-solution.onrender.com/'];

app.use(cookieParser()); 


app.use(cors(
  {
    origin: allowedOrigins,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  }
));
app.use(express.json());
app.get('/nandan', (req, res) => {
  res.send('Hello World!');
});
mongoose.connect(process.env.MONGO_URL, {
  
}).then(() => {
  console.log('Connected to MongoDB');
}
).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
}
);




app.use("/user",userRouter);
app.use('/auth',authorizedRouter)

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
import express from 'express';
import cors from 'cors';
import userRouter from "./routers/router.user.js";

const app = express();
const PORT = process.env.PORT || 3000;
const allowedOrigins = ['https://aimtech-solution.onrender.com'];

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

app.use("/user",userRouter);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
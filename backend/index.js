import { configDotenv } from 'dotenv';
import express from 'express';
import { connect } from 'mongoose';
import connectDB from './config/DB.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import userRouter from './routes/user.router.js';
import sessionRouter from './routes/session.router.js';

const app = express();
const port = process.env.PORT || 5000;
configDotenv();

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(cookieParser());
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRouter);
app.use('/api/sessions', sessionRouter);

app.listen(port, () => {
    connectDB();
  console.log(`Server is running on port ${port}`);
});
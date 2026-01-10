import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv';
import { success } from 'zod';
import connectDB from './config/database';

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin:process.env.CORS_ORIGIN,
  credentials:true
}));
app.use(express.json({limit:'10mb'}));
app.use(express.urlencoded({extended:true}));

// DATabase connection
connectDB();

// Routes

// Health check
app.get('/health',(req,res)=>{
  res.json({success:true, message:"Lost and Found backend is running"});
})

// 404 Handler
app.get(/.*/,(req,res)=>{
  res.status(400).json({
    success:false,
    error:{code:'Not_Found'},
    message:"Route not found"
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
  console.log(`Server is running at port http://localhost:${PORT}`);
})
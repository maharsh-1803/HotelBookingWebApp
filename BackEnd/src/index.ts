import express , {Request,Response} from 'express';
import cors from 'cors'
import "dotenv/config"
import mongoose from 'mongoose'
import userRoutes from './routes/users'
import authRoutes from './routes/auth'
import path from 'path'
import {v2 as cloudinary} from 'cloudinary';
import myHotelRoutes from './routes/my-hotels';
import cookieParser from 'cookie-parser';

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NANE,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
})


mongoose.connect(process.env.CONNECTION_STRING as string)

const app = express()
app.use(cookieParser()) 
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials:true
}))

app.use(express.static(path.join(__dirname,"../../frontEnd/dist")));

app.use('/api/auth',authRoutes)
app.use('/api/users',userRoutes)
app.use('/api/my-hotels',myHotelRoutes);

app.get("*",(req:Request,res:Response)=>{
    res.sendFile(path.join(__dirname,"../../frontEnd/dist/index.html")); 
})

app.listen(4000,()=>{
    console.log("Server is running on port 4000")
})

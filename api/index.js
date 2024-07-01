import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'

dotenv.config();

mongoose.connect(process.env.MONGO).then(
    ()=>{
        console.log('database is connected');
    }
).catch((err)=>{
    console.log(err);
})

const app = express();

app.use(express.json())

app.listen(3000, ()=>{
    console.log('serever is running on port 3000.');
});

app.use('/api/user',userRoutes);
app.use('/api/auth',authRoutes);

app.use((err,req,res,next)=>{
    const statuscode = err.statuscode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statuscode).json({
        success:false,
        statuscode,
        message
    })

})
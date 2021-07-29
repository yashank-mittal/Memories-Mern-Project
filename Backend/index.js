import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';

const app = express();
dotenv.config();   


app.use(express.json({limit: "30mb",extended: true}));
app.use(express.urlencoded({limit: "30mb",extended: true}));
app.use(cors());


app.use('/posts',postRoutes);
app.use('/user',userRoutes);



const PORT = process.env.PORT || 8080;

mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser: true , useUnifiedTopology: true, useFindAndModify: false})
    .then(()=> app.listen(PORT,()=>console.log(`Server is running on port: ${PORT}`)))
    .catch((e)=>console.log(`${e} did not connect`));

    
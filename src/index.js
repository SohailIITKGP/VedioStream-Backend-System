import connectDB from './db/index.js'; 
import dotenv from 'dotenv';

dotenv.config({
    path: './env'
});

connectDB();



 














// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// import express from "express";
// const app = express()
// ( async () => {
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error" ,(error) => {
//             console.log("ERRR: " , error);
//             throw error
//         })
//         app.listen(process.env.PORT, () =>{
//           console.log(`App is Listening on port ${process.env.PORT}`);  
//         })

//     }catch(error){
//         console.error("ERROR",error)
//         throw err
//     }
// })()

 
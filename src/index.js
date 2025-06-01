import dotenv from "dotenv"
import express from 'express';
import ConnectDB from "./db/index.js";


dotenv.config({
  path:'./env'
})
ConnectDB()

// (async()=>{
//     try{
//      await  mongoose.connect(`${process.env.MONGO_DB_URI}/${DB_Name}`);
//      app.on("error",(error)=>{
//        console.log("ERR:",error);
//        throw error
//      })
//       app.listen(process.env.PORT,()=>{
//        console.log(`App was listening on ${PORT}`);
//       }) 
//     }catch(error){
//         console.log("Error:",error);
//         throw error;
//     }
// })
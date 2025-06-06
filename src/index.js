import dotenv from "dotenv"
import ConnectDB from "./db/index.js";
import {app} from "./app.js"

dotenv.config({
  path:'./env'
})


ConnectDB()

.then(()=>{
  app.listen(process.env.PORT || 8000,()=>{
   console.log(`Server is Running at port: ${process.env.PORT}`);
   
  })
})
.catch((error
)=>{
console.log("MongoDBconnection FAILED!!!",error);
})

// ;(async()=>{
//     try{
//      await  mongoose.connect(`${process.env.MONGO_DB_URI}/${DB_Name}`);
//      app.on("error",(error)=>{
//        console.log("ERR:",error);
//        throw error
//      })
//       app.listen(process.env.PORT,()=>{
//        console.log(`App was listening on ${port}`);
//       }) 
//     }catch(error){
//         console.log("Error:",error);
//         throw error;
//     }
// })
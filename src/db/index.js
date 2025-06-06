import mongoose from "mongoose";
import { DB_Name } from "../constants.js";

const ConnectDB = async()=>{
   try{
      const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`);
      console.log(`\n Mongodbconnected || DBHOST ${connectionInstance.connection.host}`)
   }catch(error){
    console.log("Mongodb connection failed",error);
    process.exit(1);

   }
}
export default ConnectDB;
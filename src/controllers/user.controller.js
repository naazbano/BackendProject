import {asyncHandler} from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler(async(req, res)=>{
     //get user detail from frontend 
        const {fullName,email,username,password,}=  req.body
        console.log("email:" ,email);
          if(
            [fullName, email, username, password].some((feild) => feild?.trim() == "")

          ){
              throw new ApiError(400, "All feilds are required")
          }
      //check user already existed
       const existedUser=  await User.findOne({
            $or: [{username}, {email}]
          });
          if(existedUser){
            throw new ApiError(409, "User with email or username already exists")
          }
          console.log(req.files);
       //check image avatar --cloudinary
        const avatarLocalPath =  req.files?.avatar[0]?.path;

        // const coverImageLocalPath= req.files?.coverImage[0]?.path;
  let coverImageLocalPath;
  if(req.files && Array.isArray(req.files.coverImage)&& req.files.coverImage.length > 0){
    coverImageLocalPath = req.files.coverImage[0].path;
  }
         if(!avatarLocalPath){
            throw new ApiError(400,"Avatar files is required")
         }
     const avatar=  await  uploadOnCloudinary(avatarLocalPath);
     const coverImage = await uploadOnCloudinary(coverImageLocalPath);
     if(!avatar){
      throw new ApiError(400,"Avatar file is required");

     }  

     const user =await User.create({
      fullName,
      avatar:avatar.url,
      coverImage:coverImage?.url || "",
      email,
      password,
       username: username.toLowerCase()
     })
    console.log("Cloudinary response =>", avatar);

if (!avatar?.url) {
  throw new ApiError(400, "Avatar file is required or upload failed");
}


     const createdUser =await User.findById(user._id).select(
       "-password -refreshToken"
     )
      if(!createdUser){
         throw new ApiError(500,"Something went wrong while registering the user ")
      }
         //return response
      return res.status(201).json(
         new ApiResponse(200,createdUser,"User Registerd Succesfully")
      )
        
})
// const loginUser= asyncHandler(async(req,res) =>{
//    //reqbody ->
//    //username or email
//    //find the user
//    //password check
//    //acess and refresh token
//    //send cookie

//    const {} =
// })
export {registerUser}
import {asyncHandler} from "../utils/asyncHandler.js";
// import { ApiError } from "../utils/ApiError.js";
// import { User } from "../models/user.model.js";
// import {uploadOnCloudinary} from "../utils/cloudinary.js"
// import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler(async(req, res)=>{

    res.status(200).json({
       message:"ok"
    })
        //get user detail from frontend 
    //     const {fullName, email, username, password}=  req.body
    //     console.log("emails:" ,email);

    //       if(
    //         [fullName, email, username, password].some((feild) => feild?.trim() == "")

    //       ){
    //           throw new ApiError(400, "All feilds are required")
    //       }
    //    const existedUser=  await User.findOne({
    //         $or: [{username}, {email}]
    //       });
    //       if(existedUser){
    //         throw new ApiError(409, "User with email or username already exists")
    //       }
       
    //     const avatarLocalPath =  req.files?.avatar[0]?.path;

    //      const coverImagePath= req.files?.coverImage[0]?.path;

    //      if(!avatarLocalPath){
    //         throw new ApiError(400,"Avatar files is required")
    //      }
    //  const avatar=  await  uploadOnCloudinary(avatarLocalPath);
    //  const coverImage= await uploadOnCloudinary
    //  (coverImagePath) 
    //  if(!avatar){
    //   throw new ApiError(400,"Avatar file is required");

    //  }  

    //  const user =await User.create({
    //   fullName,
    //   avatar:avatar.url.coverImage.url || "",
    //     email,
    //     password,
    //     username: username.toLowerCase()
    //  })

    //  const createdUser =await User.findById(user._id).select(
    //    "-passwors -refreshToken"
    //  )
    //   if(!createdUser){
    //      throw new ApiError(500,"Something went wrong while registering the user ")
    //   }

    //   return res.status(201).json(
    //      new ApiResponse(200,createdUser,"user registerd Succesfully")
    //   )
        //validation-nonempy


        //check user already register




        //check for image ,check for avatar

        //upload them cloudinary

       //create user object - create entry in db

       //remove password and refresh token feild from response 
       //check for user creation
       //return res
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
export {registerUser, loginUser}
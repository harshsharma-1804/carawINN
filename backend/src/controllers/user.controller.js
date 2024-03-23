import {asyncHandler} from '../utils/asyncHandler.js';
import {ApiError} from '../utils/ApiError.js';
import {ApiResponse} from '../utils/ApiResponse.js';
import {User} from '../models/user.model.js';
import jwt from 'jsonwebtoken';

// -----------------------------------------generate tokens-----------------------------------------------------
const generateAccessandRefreshTokens = async(userID) => {
    try {
        const user = await User.findById(userID);
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        user.refreshToken = refreshToken;
        await user.save({ValidateBeforeSave:false});

        return {
            accessToken,
            refreshToken
        }

    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating session tokens");
    }
}

// -----------------------------------------register user-----------------------------------------------------

const registerUser = asyncHandler(async(req, res) => {
    // get user details from frontend
    // validation - not empty
    // check if user already exists: username, email
    // check for images, check for avatar
    // upload them to cloudinary, avatar
    // create user object - create entry in db
    // remove password and refresh token field from response
    // check for user creation
    // return res


    const {fullName, email, password} = req.body
    //console.log("email: ", email);

    if (
        [fullName, email, password].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }

    if (!fullName || !email || !password) {
        throw new ApiError(400, "All fields are required");
    }

    const existedUser = await User.findOne({email})

    if (existedUser) {
        throw new ApiError(409, "User with email already exists")
    }

    const user = await User.create({
        fullName,
        email,
        password
    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering the user")
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered Successfully")
    )

})

// ----------------------------------------login1 user------------------------------------------------------

const login1 = asyncHandler(async(req,res)=>{
    const {email} = req.body;

    if(!email){
        throw new ApiError(400, "Please provide either email or phone number");
    }

    const user = await User.findOne({email}).select("-password -refreshToken");

    if(!user){
        throw new ApiError(404, "User not found");
    }

    const validatedUser = await User.findById(user._id).select("-password -refreshToken");

    // const options ={
    //     httpOnly: true,
    //     secure: true,
    // }

    return res
    .status(200)
    .json(new ApiResponse(200, validatedUser, "User found moving to validation"));

})
// ----------------------------------------login2 user------------------------------------------------------
const login2 = asyncHandler(async(req,res) => {
    const {email,password}= req.body;
    const user = await User.findOne({email}).select('-refreshToken');


    const isPasswordValid = await user.isPasswordCorrect(password);

    if(!isPasswordValid){
        throw new ApiError(401, "Invalid Password");
    }

    const {accessToken, refreshToken} = await generateAccessandRefreshTokens(user._id);
    const loggedInUser = await User.findById(user._id).select("-password -refreshToken");

    const options={
        httpOnly: true,
        secure: false,
        path: '/'
    }

    return res
    .status(200)
    .cookie("refreshToken",refreshToken,options)
    .cookie("accessToken",accessToken,options)
    .json(new ApiResponse(200, loggedInUser, "You have successfully logged in"));
})


// ---------------------------------------logout user-------------------------------------------------------
const logoutUser = asyncHandler(async (req, res) => {
    
    await User.findByIdAndUpdate(req.user._id, {$set:{refreshToken: undefined}},{new:true})
    const options = {
        httpOnly: true,
        secure: true,
    }
    res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User logged out successfully"));
})

// ---------------------------------------access user dashboard-------------------------------------------------------
const getCurrentUser = asyncHandler ((req,res) => {
    return res.status(200).json(new ApiResponse(200, req.user, "User details fetched successfully"));
})

// ---------------------------------------session builder-------------------------------------------------------

const refreshAccessToken = asyncHandler(async(req,res)=>{
    const incomingRefreshToken= req.cookies.refreshToken || req.body.refreshToken;
    if(!incomingRefreshToken){
        throw new ApiError(401, "Unauthorized request");
    }

    try {
        const decodedToken = jwt.verify(incomingRefreshToken, process.env.REFRESH_TOKEN_SECRET)
    
        const user = await User.findById(decodedToken._id).select("-password -refreshToken");
        if(!user){
            throw new ApiError(401,"Invalid refresh token");
        }
    
        if(user?.refreshToken !== incomingRefreshToken){
            throw new ApiError(401, "Refresh token expired or already used");
        }
        const options={
            httpOnly: true,
            secure: false,
            path: '/'
        }
        const {accessToken, newRefreshToken} = await generateAccessandRefreshTokens(user._id);
    
        return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", newRefreshToken, options)
        .json(new ApiResponse(200, {user: accessToken, refreshToken: newRefreshToken}, "Token refreshed successfully"));
    }
    catch (error) {
        throw new ApiError(401, "Invalid refresh token");
    }

})

export {
    registerUser,
    login1,
    login2,
    logoutUser,
    getCurrentUser,
    refreshAccessToken
}
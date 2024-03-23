import {asyncHandler} from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import { User } from '../models/user.model.js';
import jwt from 'jsonwebtoken';

export const verifyJWT = asyncHandler(async (req, next) => {
    try {
        console.log("user");
        console.log("cookie",req.cookies?.accessToken);
        const token = req.cookies?.accessToken || req.headers["Authorization"]?.replace("Bearer ","");
        console.log("token: ",token);
        if (!token) throw new ApiError(401, "Unauthorized Request");

        const decodeToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        const user = await User.findById(decodeToken._id).select("-password -refreshToken");
        
        if (!user) throw new ApiError(401, "Unauthorized");
        req.user = user;
        next();
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid Access Token");
    }
});
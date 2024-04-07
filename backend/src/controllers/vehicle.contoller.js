import { ApiError } from "../utils/ApiError.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { Vehicle } from "../models/vehicle.model.js"
// -----------------------------------------add vehicle-----------------------------------------------------
const addVehicle = asyncHandler( async (req, res) => {
    const {vehicleClass, vehicleTitle, vehicleDescription, vehicleImages, vehicleFeatures, vehicleNumber, vehicleBaseFare, vehicleRating} = req.body;

    // if([vehicleClass,vehicleTitle,vehicleDescription,vehicleNumber,vehicleBaseFare,vehicleRating].some((field) => field?.trim() === "")){throw new ApiError(400,"All fields are necessary")}

    if ([vehicleClass, vehicleTitle, vehicleDescription, vehicleNumber].some(field => typeof field !== 'string' || field.trim() === "") || [vehicleRating,vehicleBaseFare].some(field => typeof field!=='number')) {
        throw new ApiError(400, "All fields are necessary and vehicleBaseFare and vehicleRating must be numbers");
    }

    // if ([vehicleClass, vehicleTitle, vehicleDescription, vehicleNumber].some(field => typeof field !== 'string' || field.trim() === "") ||
    //     typeof vehicleBaseFare !== 'number' || typeof vehicleRating !== 'number') {
    //     throw new ApiError(400, "All fields are necessary and vehicleBaseFare and vehicleRating must be numbers");
    // }

    if ((!Array.isArray(vehicleImages) || vehicleImages.some(image => typeof image !== 'string' || image.trim() === "")) ||
        (!Array.isArray(vehicleFeatures) || vehicleFeatures.some(feature => typeof feature !== 'string' || feature.trim() === ""))) {
        throw new ApiError(400, "Vehicle images and features must be non-empty arrays of strings");
    }

    const existedVehicle = await Vehicle.findOne({vehicleNumber})

    if(existedVehicle) {throw new ApiError(409,"Vehicle Already Exist!!")}

    const vehicle = await Vehicle.create({
        vehicleClass,vehicleTitle,vehicleDescription,vehicleImages,vehicleFeatures,vehicleNumber,vehicleBaseFare,vehicleRating
    })


    const createdVehicle = await Vehicle.findOne(vehicle._id)

    if(!createdVehicle) {throw new ApiError(500, "Something Went Wrong!")}

    return res
    .status(201)
    .json(new ApiResponse(201,createdVehicle,"Vehicle Created Successfully"))

})

// -----------------------------------------get all vehicles-----------------------------------------------------
const getVehicle = asyncHandler(async (req, res) => {
    const {id} =req.params

    const vehicle = await Vehicle.findById(id)

    if(!vehicle){throw new ApiError(409,"Vehicle not found")}

    return res
    .status(200)
    .json(new ApiResponse(200,vehicle,"Vehicle fetched Successfully"))
})

const getAllVehicles = asyncHandler(async(req,res)=>{
    const vehicles = await Vehicle.find()

    if(!vehicles) {throw new ApiError("401","Nothing to show here")}

    return res.
    status(201)
    .json(new ApiResponse(200,vehicles,"Vehicle list"))
})

export{
    addVehicle,
    getVehicle,
    getAllVehicles
}
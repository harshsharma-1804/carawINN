import mongoose,{Schema} from 'mongoose';

const vehicleSchema = new Schema({
    vehicleClass: {
        type: String,
        enum: ['Luxury', 'Semi-Luxury', 'Basic'],
        required: true
    },
    vehicleTitle: {
        type: String,
        required: true
    },
    vehicleDescription: {
        type: String,
        required: true
    },
    vehicleImages: {
        type: [String],
        required: true
    },
    vehicleFeatures: {
        type: [String],
        required: true
    },
    vehicleAvailable:{
        type: Boolean,
        required: true
    },
    vehicleNumber: {
        type: String,
        required: true
    },
    vehicleBaseFare: {
        type: String,
        required: true
    },
    vehicleRating: {
        type: Number,
        required: true
    },
    vehicleBookingHistory:[{
        type: Schema.Types.ObjectId,
        ref: 'Booking'
    }]
})

export const Vehicle = mongoose.model('Vehicle', vehicleSchema);
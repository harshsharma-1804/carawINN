import mongoose,{Schema} from 'mongoose';

const rideSchema = new Schema({
    driver: {
        type: Schema.Types.ObjectId,
        ref: 'Driver',
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    vehicle: {
        type: Schema.Types.ObjectId,
        ref: 'Vehicle',
    },
    source: {
        type: String,
        required: true,
    },
    destination: {
        type: String,
        required: true,
    },
    departureDate: {
        type: Date,
        required: true,
    },
    arrivalDate: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum: ['requested', 'started', 'completed', 'canceled'],
        default: 'requested',
    },
    fare: {
        type: Number,
        default: 0,
    },
    payment: {
        type: Schema.Types.ObjectId,
        ref: 'Payment',
    },
    rideRating: {
        type: Number,
        default: 0,
    },
},{timestamps:true});

export const Ride = mongoose.model('Ride', rideSchema);
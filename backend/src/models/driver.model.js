import mongoose,{Schema} from "mongoose";

const driverSchema = new Schema({
    driverImage:{
        type: String,
    },
    fullName:{
        type: String,
        required: true,
        trim:true,
        index: true
    },
    phone:{
        type: Number,
        required: true,
        unique: true,
        trim:true,
        index: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim:true
    },
    license:{
        type: String,
        required: true
    },
    rideHistory:[{
        type: Schema.Types.ObjectId,
        ref: 'Ride'
    }],
    paymentHistoyr:[{
        type: Schema.Types.ObjectId,
        ref: 'Payment'
    }],
},{timestamps:true});

export const Driver = mongoose.model('Driver', driverSchema);
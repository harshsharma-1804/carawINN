import mongoose,{Schema} from 'mongoose';

const paymentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required:true
    },
    driver: {
        type: Schema.Types.ObjectId,
        ref: 'Driver',
    },
    amount: {
        type: Number,
        required: true,
    },
    currency: {
        type:String,
        required:true
    },
    paymentStatus: {
        type:String,
        enum: ['pending', 'completed', 'rejected'],
        default:'pending',
        required:true
    },
    paymentMethod: {
        type:String,
        required:true
    },
    paymentDate: {
        type:Date,
        required:true
    },
    refundAmount: {
        type:Number,
        default:0
    },
    refundStatus: {
        type:String,
        enum: ['pending', 'completed', 'rejected'],
        default:null
    },
    refundDate: {
        type:Date,
    },
},{timestamps:true})

export const Payment = mongoose.model('Payment', paymentSchema);
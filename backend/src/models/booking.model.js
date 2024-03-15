import mongoose,{Schema} from 'mongoose';

const bookingSchema = new Schema({
    bookingDate: {
        type: Date,
        required: true
    },
    bookingId: {
        type: String,
        required: true
    },
    bookingStatus: {
        type: String,
        enum: ['confirmed', 'canceled', 'pending'],
        required: true
    }
});

export const Booking = mongoose.model('Booking', bookingSchema);
import mongoose,{Schema} from 'mongoose'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const documentSchema = new Schema({
    identityProof:{
        type: String,
    },
    license:{
        type: String,
    },
    verification:{
        type: String,
    }
})

const userSchema = new Schema({
    userImage:{
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
    password:{
        type: String,
        required: [true, "Password is required"]
    },
    address:{
        type: String,
        trim:true,
        index: true
    },
    documents: {
        type: documentSchema,
        index: true
    },
    refreshToken:{
        type: String
    },
    rideHistory:[{
        type: Schema.Types.ObjectId,
        ref: 'Ride'
    }],
    paymentHistoyr:[{
        type: Schema.Types.ObjectId,
        ref: 'Payment'
    }],
}, {timestamps:true});

// ----------------------------------------------------------------------------------------------

userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

userSchema.pre("save", async function(next){
    if(!this.isModified("address")) return next();
    this.address = this.email.toLowerCase();
    next();
});

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}

// ----------------------------------------------------------------------------------------------

userSchema.methods.generateAccessToken = function(){
    return jwt.sign({
        _id : this._id,
        email: this.email,
        fullName: this.fullName,
        },
        process.env.ACCESS_TOKEN_SECRET,{
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshToken = function(){
    return jwt.sign({
        _id : this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,{
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

// ----------------------------------------------------------------------------------------------

export const User = mongoose.model("User",userSchema)
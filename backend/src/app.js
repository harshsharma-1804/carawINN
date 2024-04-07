import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import session from 'express-session';

const app = express();

app.use(cors(
    {
        origin: process.env.CORS_ORIGIN,
        credentials: true
    }
));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false}
}))
app.use(express.json({limit:'160kb'}))
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.use(cookieParser())

// import routes
import userRouter from './routes/user.route.js';
import vehicleRoute from './routes/vehicle.route.js'


// use routes
app.use("/api/v1/user",userRouter)
app.use("/api/v1/vehicle",vehicleRoute)

export default app;



import express from 'express';
import cookieParser from 'express';
import cors from 'cors';
const app = express();

app.use(cors({
    origin: process.env.CORS,
    credentials: true
}))

app.use(express.json({limit:'160kb'}))
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.use(cookieParser())


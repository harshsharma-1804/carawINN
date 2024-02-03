import dotenv from 'dotenv';
import connectDB from './db/index.js';
import app from './app.js';

dotenv.config({
    path: "./.env"
})

connectDB()
.then(()=>{
    try {
        app.on("error",(error) =>{
            console.log("Server Error",error)
            throw error
        })
        app.listen(process.env.PORT || 5000,()=>{
            console.log(`Server is running on port ${process.env.PORT}`)
        })
        
    } catch (error) {
        console.log("MongoDB Connection Failed!!",error)
        throw error        
    }
})
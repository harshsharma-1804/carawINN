import dotenv from 'dotenv'
import connectDB from "./db/index"
import app from './app'


dotenv.config({
    path: "./.env"
})

connectDB()
.then(()=>{

    app.on("error",(error) =>{
        console.log("error: ",error)
        throw error
    })

    app.listen(process.env.PORT || 8000 ,()=>{
        console.log(`Server is running on PORT ${process.env.PORT}`)
    })
})
.catch((error) => {
    console.log("MongoDB Connection failed!!! ", error);
    throw error;
})

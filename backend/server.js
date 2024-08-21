import app from "./app.js";
import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config({path:'./config.env'})

const PORT=process.env.PORT || 5000

mongoose.connect(process.env.DATA_BASE_URL).then(()=>{
    console.log('db is connected')
}).catch(err=>console.log(err))

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})
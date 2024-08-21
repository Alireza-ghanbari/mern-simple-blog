import express from 'express'
import cors from 'cors'
import {fileURLToPath} from 'url'
import path from 'path'
import catchError from './Utils/catchError.js'
import HandleError from './Utils/handleError.js'
import authRouter from './Routes/Auth.js'
import userRouter from './Routes/User.js'
import uploadRouter from './Routes/Upload.js'
import categoryRouter from './Routes/Category.js'
const __filename=fileURLToPath(import.meta.url)
export const __dirname=path.dirname(__filename)
const app=express()
app.use(express.static('Public'))
app.use(express.json())
app.use(cors())
app.use('/api/auth',authRouter)
app.use('/api/user',userRouter)
app.use('/api/upload',uploadRouter)
app.use('/api/category',categoryRouter)






app.use('*',(req,res,next)=>{
    return next(new HandleError('route not found',404))
})
app.use(catchError)
export default app
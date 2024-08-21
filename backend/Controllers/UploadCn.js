import catchAsync from "../Utils/catchAsync.js";
import HandleError from "../Utils/handleError.js";
import fs from 'fs'
import { __dirname } from "../app.js";
export const uploadCn=catchAsync(async(req,res,next)=>{
    const file=req.file
    if(!file){
        return next(new HandleError('UPLOAD failed',400))
    }
    return res.status(201).json({
        file:file
    })
})
export const deleteFile=catchAsync(async(req,res,next)=>{
    const {file}= req.body 

    try{
        fs.unlink(`${__dirname}/Public/${file.split('/').at(-1)}`)
        return res.status(200).json({
            message:"File deleted successfully"
        })
    }catch(err){
        return next(new HandleError('something wrong',400))
    }  
})

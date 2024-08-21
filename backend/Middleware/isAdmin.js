import jwt from 'jsonwebtoken'
import HandleError from '../Utils/handleError.js'
import catchAsync from '../Utils/catchAsync.js'
export const isAdmin=catchAsync(async(req,res,next)=>{
    try{
        const token=jwt.verify(req.headers?.authorization.split(' ')[1],process.env.JWT_SECRET)
        if(token.role!=='admin'){
            return res.status(401).json({
                status:'error',
                message:'You are not authorized to access this route'
            })
        }
        req.user=token
        return next()
    }catch(err){
        return res.status(401).json({
            status:"error",
            message:'token invalid'
        })
    }       
})
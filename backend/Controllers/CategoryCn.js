import catchAsync from "../Utils/catchAsync.js";
import bcryptjs from 'bcryptjs'
import HandleError from "../Utils/handleError.js";
import jwt from 'jsonwebtoken'
import ApiFeatures from "../Utils/apiFeatures.js";
import Category from "../Models/CategoryMd.js";
import fs from 'fs'
import { __dirname } from "../app.js";

export const createCategory=catchAsync(async (req,res,next) => {
    const category=await Category.create(req.body)
    res.status(201).json({
        status:'success',
        data:{category}
    })
})
export const getAllCategory=catchAsync(async (req,res,next) => {
    const features=new ApiFeatures(Category,req.query).filters().sort().limitFields().paginate()
    const categories=await features.query
    res.status(200).json({
        status:'success',
        data:{categories}
    })
})
export const getOneCategory=catchAsync(async (req,res,next) => {
    const {id}=req.params
    const category=await Category.findById(id)
    res.status(200).json({
        status:'success',
        data:{category}
    })
})
export const updateCategory=catchAsync(async (req,res,next) => {
    const {id}=req.params
    const oldCategory=await Category.findByIdAndUpdate(id,req.body,{runValidators:true})

    if(req?.body?.image && req?.body?.image !=oldCategory.image){
        fs.unlinkSync(`${__dirname}/Public/${oldCategory.image}`)
    }
    const category=await Category.findById(id)
    res.status(200).json({
        status:'success',
        data:{category}
    })
})
export const deleteCategory=catchAsync(async (req,res,next) => {
    try{
        const {id}=req.params
        const category=await Category.findByIdAndDelete(id)
        if(category.image){
            fs.unlinkSync(`${__dirname}/Public/${category.image}`)
        }
        res.status(200).json({
            status:'success',
            data:{category}
        })
    }catch(err){
        console.log(err)
    }
    
})
import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    fullName:{
        type:String,
        required:[true,'fullName is required'],
        minLength:3,
        maxLength:50,
        trim:true
    },
    userName:{
        type:String,
        required:[true,'username is required'],
        unique:[true,'username is already  taken'],
        trim:true
    },
    email:{
        type:String,
        required:[true,'email is required'],
        match:[/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g,'email invalid'],
        unique:[true,'email is already  taken']
    },
    password:{
        type:String,
        required:[true,'password is required'],
    },
    role:{
        type:String,
        default:'user',
        enum:['user','admin']
    }
},{timestamps:true})

const User=mongoose.model('User',userSchema)
export default User
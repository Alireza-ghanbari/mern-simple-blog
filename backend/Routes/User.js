import express from 'express'
import { deleteUser, getAllUser, getUser, updateUser } from '../Controllers/UserCn.js'
import { isAdmin } from '../Middleware/isAdmin.js'
import { isLogin } from '../Middleware/isLogin.js'
const userRouter=express.Router()
userRouter.route('/').get(isAdmin,getAllUser)
userRouter.route('/:id').get(isLogin,getUser).patch(isLogin,updateUser).delete(isLogin,deleteUser)


export default userRouter
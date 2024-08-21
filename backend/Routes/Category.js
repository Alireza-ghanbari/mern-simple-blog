import express from 'express'
import { isAdmin } from '../Middleware/isAdmin.js'
import { createCategory, deleteCategory, getAllCategory, getOneCategory, updateCategory } from '../Controllers/CategoryCn.js'
const categoryRouter=express.Router()
categoryRouter.route('/').get(getAllCategory).post(isAdmin,createCategory)
categoryRouter.route('/:id').get(isAdmin,getOneCategory).patch(isAdmin,updateCategory).delete(isAdmin,deleteCategory)


export default categoryRouter
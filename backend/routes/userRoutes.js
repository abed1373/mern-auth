import express from 'express'
const router=express.Router()
import { authUser, getUserProfile, logoutUser, registerUser, updateUserProfile } from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'

router.post('/auth',authUser)
router.post('/',registerUser)
router.post('/logout',logoutUser)
router.get('/profile',protect,getUserProfile)
router.put('/profile',protect,updateUserProfile)

export default router
import express from 'express'

import { getHome, postLoginController, postRegisterController, postGetUser, postEmailAvailability, postSendEmail, postUpdateProfile, logoutController } from '../controllers/Auth.js'
import { isAuthenticated } from '../middlewares/Auth.js'


const router = express.Router()

router.get('/', getHome)

router.post('/api/v1/login', postLoginController)

router.post('/api/v1/register', postRegisterController)

router.post('/api/v1/get-user', isAuthenticated, postGetUser)

router.post('/api/v1/check-email-availability', postEmailAvailability)

router.post('/api/v1/send-email', postSendEmail)

router.post('/api/v1/update-profile', postUpdateProfile)

router.get('/api/v1/logout', logoutController)

export default router
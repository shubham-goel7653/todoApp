const User = require('../controllers/User.controller')
const UserMiddleware = require('../middleware/User.middleware')
const express=require('express')
const userRoute =express.Router()


userRoute.post('/createUser',UserMiddleware.validateCreateUser,User.createUser)
userRoute.post('/updateUser',UserMiddleware.validateUpdateUser,User.updateUser)

module.exports = userRoute
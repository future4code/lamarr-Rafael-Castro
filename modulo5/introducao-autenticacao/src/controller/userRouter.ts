import express from "express";

import { UserController } from "../controller/UserController";

export const userRouter = express.Router()

const userController = new UserController()

userRouter.get('/getid', userController.getUserId)
userRouter.get('/getdata', userController.getUserData)
userRouter.post('/signup', userController.signup)
userRouter.post('/login', userController.login)

import express from "express";
import { UserBusiness } from "../business/UserBusiness"
import { UserController } from "../controller/UserController";
import { UserDatabase } from "../data/UserDatabase"
import { HashGenerator } from "../services/hashGenerator"
import { IdGenerator } from "../services/idGenerator"
import { TokenGenerator } from "../services/tokenGenerator"

export const userRouter = express.Router();

const hashGenerator = new HashGenerator()
const idGenerator = new IdGenerator()
const tokenGenerator = new TokenGenerator()

const userDatabase = new UserDatabase()
const userBusiness = new UserBusiness(
    userDatabase, tokenGenerator, 
    idGenerator, hashGenerator
)
const userController = new UserController(userBusiness)

userRouter.get("/get-user/:id", (req, res) => userController.getUserById(req, res));
userRouter.post("/signup", (req, res) => userController.signup(req, res));
userRouter.post("/login", (req, res) => userController.login(req, res));
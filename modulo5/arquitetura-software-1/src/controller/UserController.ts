import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness"
import { BaseDB } from "../data/BaseDB"
import { UserDB } from "../data/UserDB"

export class UserController extends BaseDB {

    createTableCtl = async (req:Request, res:Response): Promise<void> =>{
        try {
            const userBisObj = new UserBusiness()
            await userBisObj.createTableBis()
            // await new UserBusiness().createTableBis()
            console.log('test createTableCtl');
            res.status(201).send({ message: "Table User_Arq created!" })
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    getUsersCtl = async (req:Request, res:Response):Promise<void> => {
        try {
            const userBisObj = new UserBusiness
            const result = await userBisObj.getUsersBis()
            res.status(200).send(result)
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    createUserCtl = async (req: Request, res: Response) => {
        try {
            const newUser:UserDB = new UserDB(
                "idNumber",
                req.body.name,
                req.body.email,
                req.body.password
            )
            
            await new UserBusiness().createUserBis(newUser)

            res.status(201).send({ message: "User created!" })
        } catch (error:any) {
            res.status(400).send(error.message)
        } 
        // finally {
        //     UserController.connection.destroy()
        // }
    }

}


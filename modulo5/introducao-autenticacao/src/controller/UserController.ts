import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness"
import { LoginInputDTO, UserInputDTO } from "../model/user"

export class UserController {

  public signup = async (req: Request, res: Response) => {
    try {
      const { name, nickname, email, password } = req.body

      const input: UserInputDTO = {
        name,
        nickname,
        email,
        password,
      }
      const userBusiness = new UserBusiness()
      const token = await userBusiness.signup(input)

      res.status(201).send({ message: "Usuário criado!", token })
    } catch (error: any) {
      res.status(400).send(error.message)
    }
  };


  public login = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body

      const input: LoginInputDTO = {
        email,
        password,
      }
      const userBusiness = new UserBusiness()
      const token = await userBusiness.login(input)

      res.status(200).send({ token })
    } catch (error: any) {
      res.status(400).send(error.message)
    }
  };

  public getUserId = async (req: Request, res: Response) => {
    try {
      const token = req.query.token as string

      const userBusiness = new UserBusiness()
      const userId = await userBusiness.getUserId(token)

      res.status(201).send({ id: userId })
    } catch (error: any) {
      res.status(400).send(error.message)
    }
  };

  public getUserData = async (req: Request, res: Response) => {
    try {

      const token = req.headers.authorization as string

      const userBusiness = new UserBusiness()
      const userData = await userBusiness.getUserData(token)

      res.status(201).send({ id: userData.id, email: userData.email })
    } catch (error: any) {
      res.status(400).send(error.message)
    }
  };
}

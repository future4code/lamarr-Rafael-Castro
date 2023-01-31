import { UserDatabase } from "../data/UserDatabase"
import {
  CustomError, InvalidEmail, InvalidName,
  InvalidPassword, InvalidToken, PasswordTooShort, UserNotFound
} from "../error/customError"
import { UserInputDTO, user, LoginInputDTO } from "../model/user"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"

const idGenerator = new IdGenerator()
const authenticator = new Authenticator()

export class UserBusiness {
  public signup = async (input: UserInputDTO) => {
    try {
      const { name, nickname, email, password } = input

      if (!name || !nickname || !email || !password) {
        throw new CustomError(
          400,
          'Preencha os campos "name","nickname", "email" e "password"'
        )
      }

      if (name.length < 4) {
        throw new InvalidName()
      }

      if (!email.includes("@")) {
        throw new InvalidEmail()
      }

      if (password.length < 6) {
        throw new PasswordTooShort
      }

      const id: string = idGenerator.generateId()

      const user: user = {
        id,
        name,
        nickname,
        email,
        password,
      }

      const userDatabase = new UserDatabase()
      await userDatabase.insertUser(user)

      const token = authenticator.generateToken({ id })

      return token
    } catch (error: any) {
      throw new CustomError(400, error.message)
    }
  };

  public login = async (input: LoginInputDTO) => {
    try {
      const { email, password } = input

      if (!email || !password) {
        throw new CustomError(
          400,
          'Preencha os campos "email" e "password"'
        )
      }

      if (!email.includes("@")) {
        throw new InvalidEmail()
      }

      const userDatabase = new UserDatabase()
      const user = await userDatabase.findUser("email", email)

      if (!user) {
        throw new UserNotFound()
      }

      if (user.password !== password) {
        throw new InvalidPassword()
      }

      const token = authenticator.generateToken({ id: user.id })

      return token
    } catch (error: any) {
      throw new CustomError(400, error.message)
    }
  };

  public getUserId = async (token: string) => {
    try {
      if (!token) {
        throw new InvalidToken
      }

      const { id } = authenticator.getTokenData(token)

      return id

    } catch (error: any) {
      throw new CustomError(400, error.message)
    }
  };

  public getUserData = async (token: string) => {
    try {
      if (!token) {
        throw new InvalidToken
      }

      const { id } = authenticator.getTokenData(token)
      
      const userDatabase = new UserDatabase()
      const { email } = await userDatabase.findUser("id", id)

      return {id, email}

    } catch (error: any) {
      throw new CustomError(400, error.message)
    }
  };
}

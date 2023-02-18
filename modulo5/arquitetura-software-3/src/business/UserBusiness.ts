import { UserDatabase } from "../data/UserDatabase"
import { CustomError } from "../error/CustomError"
import { InsuficientData, InvalidEmail, InvalidPassword } from "../error/UserError"
import { user } from "../model/user"
import { createUserDTO } from "../model/userDTO"
import { generateId } from "../services/idGenerator"


export class UserBusiness {
  async create(input: createUserDTO):Promise<void> {
    try {
      const { name, email, password } = input

      if (!email || !name || !password) {
        throw new InsuficientData
      }

      if (!email.includes('@')) {
        throw new InvalidEmail()
      }

      if (password.length < 6) {
        throw new InvalidPassword()
      }

      const id = generateId()

      const newUser:user = {id, name, email, password}

      const userDatabase = new UserDatabase()
      await userDatabase.create(newUser)

    } catch (error:any) {
      throw new CustomError(error.statusCode, error.message)
    }
  }

  getUsers = async ():Promise<void> =>{
    const userDatabase = new UserDatabase()
    return await userDatabase.getUsers()
  }
}

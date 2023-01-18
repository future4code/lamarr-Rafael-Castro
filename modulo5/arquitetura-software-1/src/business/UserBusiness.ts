import { UserDB } from "../data/UserDB"

export class UserBusiness {
    
    createTableBis = async (): Promise<any> => {
        await UserDB.createTableDt
        console.log('test createTableBis')
    }
    
    getUsersBis = async (): Promise<UserDB[]> => {
        return await UserDB.getUsersDt()
    }

    createUserBis = async (newUser: UserDB): Promise<void> => {
        try {
            const { name, email, password } = newUser

            if (!name || !email || !password) {
                throw new Error('Please inform name, email and password.')
            }

            if (password.length <6) {
                throw new Error('Password too short.')
            }
            
            if(email.indexOf("@") === -1){
                throw new Error("Invalid Email");
            }

            const id:string = Date.now().toString()

            const userDB = new UserDB(
                id,
                name,
                email,
                password
            )

            await UserDB.createUserDt(userDB)

        } catch (error:any) {
            throw new Error(error.message)
        }
    }


}
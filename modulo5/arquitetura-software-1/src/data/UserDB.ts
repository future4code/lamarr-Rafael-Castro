import { BaseDB } from "./BaseDB"

export class UserDB extends BaseDB{
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public password: string,
    ){
        super()
    }

    
    static createTableDt = async (): Promise<any> =>{
        try {
            console.log('test createTableDt');
            // await UserDB.connection.raw(`
            //     CREATE TABLE User_Arq(
            //     id VARCHAR(255) PRIMARY KEY,
            //     name VARCHAR(255) NOT NULL,
            //     email VARCHAR(255) NOT NULL UNIQUE,
            //     password VARCHAR(255) NOT NULL)
            // `)
        } catch (error:any) {
            return error
        }
    }

    static getUsersDt = async ():Promise<UserDB[]> => {
        try {
            return await UserDB.connection('User_Arq').select()
        } catch (error:any) {
            return error
        }
    }

    static createUserDt = async(user: UserDB): Promise<void> => {
        try {
            await UserDB.connection.insert({
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password
            }).into('User_Arq')
        } catch (error:any) {
            throw new Error(error.message)
        }
    }

}
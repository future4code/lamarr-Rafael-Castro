import { BaseDatabase } from "./BaseDatabase";
import { User } from "../model/User";
import { UserRepository } from "../business/UserRepository"

export class UserDatabase extends BaseDatabase implements UserRepository {

   protected tableName: string = "User_Arq";

   private toModel(dbModel?: any): User | undefined {
      return (
         dbModel &&
         new User(
            dbModel.id,
            dbModel.name,
            dbModel.email,
            dbModel.password,
            dbModel.role
         )
      );
   }

   public async createUser(user: User): Promise<void> {
      try {
         await BaseDatabase.connection.raw(`
            INSERT INTO ${this.tableName} (id, name, email, password, role)
            VALUES (
            '${user.getId()}', 
            '${user.getName()}', 
            '${user.getEmail()}',
            '${user.getPassword()}', 
            '${user.getRole()}'
            )`
         );
      } catch (error:any) {
         throw new Error(error.sqlMessage || error.message)
      }
   }

   public async getUserByEmail(email: string): Promise<User | undefined> {
      try {
         const result = await BaseDatabase.connection.raw(`
            SELECT * from ${this.tableName} WHERE email = '${email}'
         `);
         return this.toModel(result[0][0]);
      } catch (error:any) {
         throw new Error(error.sqlMessage || error.message)
      }
   }

   public async getUserById(id: string): Promise<User | undefined> {
      try {
         const result = await BaseDatabase.connection.raw(`
            SELECT * from ${this.tableName} WHERE id = '${id}'
         `);
         return this.toModel(result[0][0]);
      } catch (error:any) {
         throw new Error(error.sqlMessage || error.message)
      }
   }

   public async getAllUsers(): Promise<User[]> {
      try {
         const result = await BaseDatabase.connection.raw(`
            SELECT * from ${this.tableName}
         `);
         return result[0].map((res: any) => {
            return this.toModel(res);
         });
      } catch (error:any) {
         throw new Error(error.sqlMessage || error.message)
      }
   }
}

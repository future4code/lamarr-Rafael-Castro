import { user } from "../model/user"
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "LABEFLIX_USER";

  async create(input: user): Promise<void> {
    await UserDatabase.connection
      .insert(input)
      .into(UserDatabase.TABLE_NAME);
  }

  async getUsers (): Promise<any> {
    return await UserDatabase
    .connection(UserDatabase.TABLE_NAME)
    .select()
  }
}

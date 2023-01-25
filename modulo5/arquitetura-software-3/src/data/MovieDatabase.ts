import { movie } from "../model/movie"
import { BaseDatabase } from "./BaseDatabase";

export class MovieDatabase extends BaseDatabase {
  private static TABLE_NAME = "LABEFLIX_MOVIE";

  async create(input:movie): Promise<void> {
    await MovieDatabase.connection
      .insert(input)
      .into(MovieDatabase.TABLE_NAME);
  }

  async getMovies (): Promise<any> {
    return await MovieDatabase
    .connection(MovieDatabase.TABLE_NAME)
    .select()
  }
}

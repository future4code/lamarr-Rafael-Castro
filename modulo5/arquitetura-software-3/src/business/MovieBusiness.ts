import { MovieDatabase } from "../data/MovieDatabase"
import { createMovieDTO } from "../model/movieDTO"
import { movie } from "../model/movie"
import { generateId } from "../services/idGenerator"
import { InsuficientData } from "../error/MovieError"
import { CustomError } from "../error/CustomError"

export class MovieBusiness {
  async create(input: createMovieDTO):Promise<void> {
    try {
      const {title, description, duration_in_minutes, year_of_release} = input

      if (!title || !description || !duration_in_minutes || !year_of_release) {
        throw new InsuficientData()
      }
  
      const id = generateId()

      const newMovie:movie = {
        id,
        title,
        description,
        duration_in_minutes,
        year_of_release}
  
      const movieDatabase = new MovieDatabase()
      await movieDatabase.create(newMovie)

    } catch (error:any) {
      throw new CustomError(error.statusCode, error.message)
    }
  }

  async getMovies():Promise<void> {
    const movieDatabase = new MovieDatabase()
    return await movieDatabase.getMovies()
  }
}

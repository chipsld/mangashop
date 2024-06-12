import Genre from '#models/genre'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { JikanResponse, GenresClient } from '@tutkli/jikan-ts'
import type { Genre as genreType } from '@tutkli/jikan-ts'
export default class extends BaseSeeder {
  async run() {
    const genresClient = new GenresClient()

    const genres = await genresClient
      .getMangaGenres()
      .then((response: JikanResponse<genreType[]>) => {
        return response.data
      })

    genres.forEach((genre) => {
      Genre.create({ name: genre.name })
    })
  }
}

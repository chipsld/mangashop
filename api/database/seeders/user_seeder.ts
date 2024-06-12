import { UserFactory } from '#database/factories/user_factory'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
    async run() {

        return await genresClient.getMangaGenres().then((response: JikanResponse<mangaType>) => {
            return response.data
          })
    await .createMany(5)
  }
}

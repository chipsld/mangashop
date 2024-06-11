import { MangaClient, JikanResponse, Manga } from '@tutkli/jikan-ts'

export default class MangaController {
  async index() {
    const mangaClient = new MangaClient()

    return await mangaClient
      .getMangaSearch({ page: 1 })
      .then((response: JikanResponse<Manga[]>) => {
        return response.data
      })
  }
}

import { JikanResponse } from '@tutkli/jikan-ts'
import type { Recommendation, MangaClient } from '@tutkli/jikan-ts'

export default class MangaService {
  constructor(private readonly mangaClient: MangaClient) {}

  async getMangaRecommandations(mal_id: number | undefined) {
    if (mal_id)
      return await this.mangaClient
        .getMangaRecommendations(mal_id)
        .then((response: JikanResponse<Recommendation[]>) => {
          return response.data
        })
  }
}

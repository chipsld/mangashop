import { DateTime } from 'luxon'
import { MangaClient, JikanResponse } from '@tutkli/jikan-ts'
import type { Manga as mangaType } from '@tutkli/jikan-ts'

import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Manga from '#models/manga'

export default class extends BaseSeeder {
  async run() {
    const mangaClient = new MangaClient()

    const mangas = await mangaClient
      .getMangaSearch()
      .then((response: JikanResponse<mangaType[]>) => {
        return response.data
      })

    mangas.forEach((manga) => {
      const releaseDate = DateTime.fromJSDate(new Date(manga.published.from))
      Manga.create({
        title: manga.title,
        author: manga.authors[0].name,
        cover: manga.images?.webp?.large_image_url,
        status: manga.status,
        synopsis: manga.synopsis,
        publishing: manga.publishing,
        score: manga.score,
        release_date: releaseDate,
        volumes: manga.volumes,
      })
    })
  }
}

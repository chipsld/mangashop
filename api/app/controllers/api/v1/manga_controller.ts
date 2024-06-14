import { MangaClient } from '@tutkli/jikan-ts'

import Manga from '#models/manga'
import type { HttpContext } from '@adonisjs/core/http'

import MangaService from '#services/manga_service'
export default class MangaController {
  async index({}: HttpContext) {
    return Manga.all()
  }

  async show({ params }: HttpContext) {
    const { id } = params
    const manga = await Manga.findOrFail(id)
    await manga.load('comments')
    await manga.load('genres')

    const mangaService = new MangaService(new MangaClient())

    return [manga, await mangaService.getMangaRecommandations(manga.mal_id)]
  }
}

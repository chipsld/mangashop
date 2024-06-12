import Manga from '#models/manga'
import type { HttpContext } from '@adonisjs/core/http'
export default class MangaController {
  async index({}: HttpContext) {
    return Manga.all()
  }
  async show({ params }: HttpContext) {
    const { id } = params
    const manga = await Manga.findByOrFail(id)
    return manga.preload('comments')
  }
}

import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import MangaGenre from './manga_genre.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Genre extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @hasMany(() => MangaGenre)
  declare mangaGenres: HasMany<typeof MangaGenre>
}

import { DateTime } from 'luxon'
import { BaseModel, hasOne, column } from '@adonisjs/lucid/orm'
import type { HasOne } from '@adonisjs/lucid/types/relations'

import Manga from './manga.js'
import Genre from './genre.js'

export default class MangaGenre extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare mangaId: number

  @column()
  declare genreId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasOne(() => Manga)
  declare Manga: HasOne<typeof Manga>

  @hasOne(() => Genre)
  declare Genre: HasOne<typeof Genre>
}

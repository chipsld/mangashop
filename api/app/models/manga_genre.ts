import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import { BelongsTo } from '@adonisjs/lucid/types/relations'

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

  @belongsTo(() => Manga)
  declare Manga: BelongsTo<typeof Manga>

  @belongsTo(() => Genre)
  declare Genre: BelongsTo<typeof Genre>
}

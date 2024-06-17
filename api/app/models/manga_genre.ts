import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

import Manga from './manga.js'
import Genre from './genre.js'

export default class MangaGenre extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column({ serializeAs: null })
  declare mangaId: number

  @column({ serializeAs: null })
  declare genreId: number

  @column.dateTime({ autoCreate: true, serializeAs: null })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  declare updatedAt: DateTime

  @belongsTo(() => Manga)
  declare manga: BelongsTo<typeof Manga>

  @belongsTo(() => Genre)
  declare genre: BelongsTo<typeof Genre>
}

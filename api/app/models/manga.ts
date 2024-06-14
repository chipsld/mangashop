import { DateTime } from 'luxon'

import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'

import Comment from './comment.js'
import MangaGenre from './manga_genre.js'

export default class Manga extends BaseModel {
  static get table() {
    return 'mangas'
  }

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare mal_id: number

  @column()
  declare title: string

  @column()
  declare author: string

  @column()
  declare cover: string

  @column()
  declare status: string

  @column()
  declare synopsis: string

  @column()
  declare publishing: boolean

  @column()
  declare score: number

  @column()
  declare release_date: DateTime

  @column()
  declare volumes: number

  @hasMany(() => MangaGenre)
  declare genres: HasMany<typeof MangaGenre>

  @hasMany(() => Comment)
  declare comments: HasMany<typeof Comment>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null
}

import { DateTime } from 'luxon'

import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'

import Genre from './genre.js'
import Comment from './comment.js'

export default class Manga extends BaseModel {
  static preload(arg0: string) {
    throw new Error('Method not implemented.')
  }
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

  @hasMany(() => Genre)
  declare genres: HasMany<typeof Genre>

  @hasMany(() => Comment)
  declare comments: HasMany<typeof Comment>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null
}

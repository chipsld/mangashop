import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'mangas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title').notNullable()
      table.string('author').notNullable()
      table.string('cover').notNullable()
      table.string('status').notNullable()
      table.text('synopsis', 'mediumtext').notNullable()
      table.boolean('publishing').notNullable()
      table.float('score').notNullable()
      table.date('release_date').notNullable()
      table.integer('volumes')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

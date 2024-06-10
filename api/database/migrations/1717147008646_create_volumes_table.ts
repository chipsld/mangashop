import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'volumes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.float('price').notNullable()
      table.integer('volume_number').notNullable()
      table.integer('manga_id').notNullable()
      table.string('cover').notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

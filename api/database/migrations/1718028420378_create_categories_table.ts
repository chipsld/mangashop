import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'categories'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.increments('name')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

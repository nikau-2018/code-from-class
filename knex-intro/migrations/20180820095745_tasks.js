exports.up = (knex, Promise) => {
  return knex.schema.createTable('tasks', table => {
    table.increments('id')
    table.string('title')
    table.boolean('is_complete')
  })
}

exports.down = (knex, Promise) => {
  return knex.dropTable('tasks')
}

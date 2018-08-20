exports.up = (knex, Promise) => {
  return knex.schema.createTable('vehicles', table => {
    table.increments('id')
    table.string('make')
    table.integer('driver_id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('vehicles')
}

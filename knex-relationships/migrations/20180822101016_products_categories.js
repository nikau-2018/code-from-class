exports.up = (knex, Promise) => {
  return knex.schema.createTable('products_categories', table => {
    table.increments('id').primary()
    table.integer('product_id').references('products.id')
    table.integer('category_id').references('categories.id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('products_categories')
}

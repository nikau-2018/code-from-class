const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getProductCategories
}

function getProductCategories (db = connection) {
  return db('products')
    .join('products_categories', 'products.id', 'products_categories.product_id')
    .join('categories', 'categories.id', 'products_categories.category_id')
    .select('products.name as productName', 'categories.name as categoryName')
}

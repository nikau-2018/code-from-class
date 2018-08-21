exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('products_categories').del()
    .then(() => {
      // Inserts seed entries
      return knex('products_categories').insert([
        {id: 77701, category_id: 88801, product_id: 99901},
        {id: 77702, category_id: 88802, product_id: 99902},
        {id: 77703, category_id: 88803, product_id: 99903}
      ])
    })
}
